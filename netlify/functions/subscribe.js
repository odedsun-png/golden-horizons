exports.handler = async (event) => {
  const headers = {"Access-Control-Allow-Origin":"*","Content-Type":"application/json"};
  if (event.httpMethod === "OPTIONS") return {statusCode:204,headers,body:""};
  if (event.httpMethod !== "POST") return {statusCode:405,headers,body:JSON.stringify({message:"Method not allowed"})};
  let email;
  try { email = JSON.parse(event.body||"{}").email; } catch { return {statusCode:400,headers,body:JSON.stringify({message:"Bad request"})}; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {statusCode:400,headers,body:JSON.stringify({message:"Invalid email"})};
  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID, 10);
  if (!apiKey || !listId) return {statusCode:500,headers,body:JSON.stringify({message:"Config error"})};
  try {
    const r = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {accept:"application/json","content-type":"application/json","api-key":apiKey},
      body: JSON.stringify({email, listIds:[listId], updateEnabled:true})
    });
    if (r.status===201 || r.status===204) return {statusCode:200,headers,body:JSON.stringify({message:"ok"})};
    const d = await r.json();
    if (d.code==="duplicate_parameter") return {statusCode:200,headers,body:JSON.stringify({message:"ok"})};
    return {statusCode:502,headers,body:JSON.stringify({message:"Failed"})};
  } catch(e) { return {statusCode:503,headers,body:JSON.stringify({message:"Unavailable"})}; }
};