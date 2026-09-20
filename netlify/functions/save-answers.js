// Netlify function: saves the welcome-email answers to the Brevo contact.
// Deploy to: netlify/functions/save-answers.js
// Mirrors your existing subscribe.js (BREVO_API_KEY, /v3/contacts, updateEnabled).

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: "Bad JSON" };
  }

  var email = (data.email || "").trim();
  var region = (data.region || "").trim();      // e.g. "Latin America" -> GH_REGION (text, NEW field)
  var intent = parseInt(data.intent, 10);       // 1-4 -> GH_INTENT (category)

  // No email means we can't identify the contact; accept quietly so the page still shows thank-you.
  if (!email) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, reason: "no-email" }) };
  }

  // NOTE: region goes to GH_REGION, NOT GH_INTEREST — GH_INTEREST is already used
  // by your Facebook lead ads (retirement-journey answer). Do not overwrite it.
  var attributes = {};
  if (region) attributes.GH_REGION = region;
  if (intent >= 1 && intent <= 4) attributes.GH_INTENT = intent;

  var apiKey = process.env.BREVO_API_KEY;

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        email: email,
        attributes: attributes,
        updateEnabled: true
      })
    });

    // 201 created, 204 updated, 200 = fine. Duplicate/exists is also fine.
    if (res.status === 201 || res.status === 204 || res.status === 200) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    var body = await res.text();
    // Treat "already exists" as success (contact updated).
    if (res.status === 400 && body.indexOf("duplicate_parameter") !== -1) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
    return { statusCode: 200, body: JSON.stringify({ ok: false, status: res.status, body: body }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};
