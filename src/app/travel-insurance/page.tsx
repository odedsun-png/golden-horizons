import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Compare Travel Insurance for Retirement Scouting Trips | Golden Horizons",
  description:
    "Planning a scouting trip abroad before you retire overseas? Compare travel-insurance options for trip cancellation, emergency medical care, evacuation, and travel delays before you book.",
  alternates: { canonical: "https://golden-horizons.org/travel-insurance" },
  openGraph: {
    type: "website",
    title: "Compare Travel Insurance for Retirement Scouting Trips",
    description:
      "A practical guide to comparing travel-insurance options before visiting a potential retirement destination.",
    url: "https://golden-horizons.org/travel-insurance",
  },
};

const AFFILIATE_URL = "https://www.squaremouth.com/?aid=24136";

const css = `
  .ti-shell { --ink:#211b17; --ink-soft:#4d4239; --muted:#6f6256; --paper:#fbf6ec;
    --paper-deep:#f2e9d9; --canvas:#e8e1d5; --gold:#c9ad69; --gold-light:#ead9a7;
    --line:#cfc1a9; --white:#fff; background:var(--canvas); color:var(--ink);
    font-family:Georgia,"Times New Roman",serif; font-size:18px; line-height:1.65;
    min-height:100vh; padding:28px 16px 56px; }
  .ti-shell * { box-sizing:border-box; }
  .ti-page { max-width:760px; margin:0 auto; overflow:hidden; background:var(--paper);
    border:1px solid var(--ink); box-shadow:0 16px 45px rgba(33,27,23,.08); }
  .ti-masthead { padding:13px 26px; border-bottom:1px solid var(--line); color:var(--muted);
    font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:700;
    letter-spacing:.14em; text-align:center; text-transform:uppercase; }
  .ti-hero { padding:52px 56px 42px; text-align:center; border-bottom:4px double var(--ink); }
  .ti-eyebrow { margin:0 0 14px; color:#806b3f; font-family:Arial,Helvetica,sans-serif;
    font-size:12px; font-weight:700; letter-spacing:.17em; text-transform:uppercase; }
  .ti-page h1,.ti-page h2 { margin-top:0; font-family:Georgia,"Times New Roman",serif;
    font-weight:700; letter-spacing:-.02em; }
  .ti-page h1 { max-width:640px; margin:0 auto 16px; font-size:clamp(2rem,4.6vw,2.9rem); line-height:1.1; }
  .ti-sub { max-width:600px; margin:0 auto; color:var(--ink-soft); font-size:1.12rem; line-height:1.55; }
  .ti-hero-img { display:block; width:100%; height:360px; object-fit:cover; object-position:center; border-bottom:1px solid var(--line); }
  .ti-plan-img { display:block; width:100%; height:270px; margin:22px 0 28px; object-fit:cover; border:1px solid var(--line); }
  .ti-content { padding:38px 56px 44px; }
  .ti-content p { margin:0 0 20px; }
  .ti-lede { font-size:1.13rem; }
  .ti-cta { margin:30px 0 10px; padding:30px 24px 26px; background:var(--ink); color:var(--white); text-align:center; }
  .ti-cta h2 { margin-bottom:8px; color:var(--white); font-size:1.6rem; line-height:1.25; }
  .ti-cta p { max-width:540px; margin:0 auto 21px; color:#f4ead8; font-size:1rem; line-height:1.5; }
  .ti-btn { display:inline-flex; align-items:center; justify-content:center; min-height:50px;
    padding:13px 24px; border:1px solid var(--paper); background:var(--gold-light); color:var(--ink);
    font-family:Arial,Helvetica,sans-serif; font-size:.94rem; font-weight:800; line-height:1.2;
    text-decoration:none; transition:background 160ms ease,transform 160ms ease; }
  .ti-btn:hover,.ti-btn:focus-visible { background:var(--gold); transform:translateY(-1px); }
  .ti-btn:focus-visible,.ti-page a:focus-visible { outline:3px solid #6c8ca4; outline-offset:3px; }
  .ti-disclosure { margin:0 0 34px; color:var(--muted); font-family:Arial,Helvetica,sans-serif;
    font-size:.78rem; line-height:1.55; text-align:center; }
  .ti-section { margin-top:36px; }
  .ti-section h2 { margin-bottom:13px; font-size:1.75rem; line-height:1.2; }
  .ti-section-intro { color:var(--ink-soft); }
  .ti-list { margin:0; padding:0 0 0 24px; }
  .ti-list li { margin:8px 0; padding-left:4px; }
  .ti-list li::marker { color:#806b3f; }
  .ti-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin:22px 0 0; }
  .ti-card { padding:18px 17px; border:1px solid var(--line); background:var(--paper-deep); }
  .ti-card strong { display:block; margin-bottom:5px; font-size:1.02rem; }
  .ti-card span { display:block; color:var(--ink-soft); font-size:.92rem; line-height:1.45; }
  .ti-callout { margin:28px 0; padding:20px 22px; border-left:4px solid var(--gold); background:var(--paper-deep); }
  .ti-callout h2 { font-size:1.4rem; margin-bottom:10px; }
  .ti-callout p:last-child { margin-bottom:0; }
  .ti-notice { margin-top:38px; padding-top:22px; border-top:4px double var(--ink); }
  .ti-notice-title { margin:0 0 10px; font-family:Arial,Helvetica,sans-serif; font-size:.75rem;
    font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
  .ti-notice p { color:var(--ink-soft); font-family:Arial,Helvetica,sans-serif; font-size:.8rem; line-height:1.55; }
  .ti-notice a { color:#705b31; font-weight:700; }
  .ti-footer { padding:20px 56px 30px; border-top:1px solid var(--line); color:var(--muted);
    font-family:Arial,Helvetica,sans-serif; font-size:.75rem; line-height:1.5; text-align:center; }
  @media (max-width:640px){
    .ti-shell{ font-size:17px; padding:0; }
    .ti-page{ border-right:0; border-left:0; box-shadow:none; }
    .ti-masthead{ padding-right:16px; padding-left:16px; font-size:9px; letter-spacing:.1em; }
    .ti-hero{ padding:38px 22px 32px; }
    .ti-hero-img{ height:220px; }
    .ti-plan-img{ height:200px; }
    .ti-content{ padding:30px 22px 36px; }
    .ti-sub,.ti-lede{ font-size:1.04rem; }
    .ti-grid{ grid-template-columns:1fr; }
    .ti-cta{ margin-right:-4px; margin-left:-4px; padding-right:17px; padding-left:17px; }
    .ti-btn{ width:100%; }
    .ti-footer{ padding-right:22px; padding-left:22px; }
  }
`;

export default function TravelInsurancePage() {
  return (
    <div className="ti-shell">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="ti-page">
        <div className="ti-masthead">Golden Horizons &nbsp;&middot;&nbsp; Travel, Money &amp; Retirement</div>

        <header className="ti-hero">
          <p className="ti-eyebrow">Before you book</p>
          <h1>You Planned the Trip. Did You Plan for What Could Go Wrong?</h1>
          <p className="ti-sub">
            A retirement scouting trip can involve thousands of dollars in flights, lodging, tours,
            and other non-refundable costs. Before you leave the country, compare travel-insurance
            options for cancellations, medical emergencies, delays, and evacuation.
          </p>
        </header>

        <img
          className="ti-hero-img"
          src="/travel-hero.jpg"
          alt="A mature couple walking with carry-on luggage along a sunny Mediterranean coastal promenade"
          width={1600}
          height={900}
        />

        <div className="ti-content">
          <p className="ti-lede">
            Most travelers plan where they will stay, what they will see, and how much the trip will
            cost. Fewer plan for the moment when someone gets sick, a flight is canceled, a trip has
            to end early, or emergency transportation is needed far from home.
          </p>
          <p>
            That is when assumptions become expensive. Your regular health insurance, Medicare,
            homeowners insurance, or credit-card benefits may not cover every situation overseas. The
            only way to know what a travel-insurance plan covers is to review its benefits, limits,
            exclusions, and eligibility requirements.
          </p>

          <div className="ti-cta">
            <h2>Do not leave your most expensive risks unexamined</h2>
            <p>
              Compare travel-insurance plans for your destination, dates, trip cost, and coverage
              priorities before you book.
            </p>
            <a
              className="ti-btn"
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              data-analytics-event="travel_insurance_cta_top"
            >
              Compare Plans Before You Leave&nbsp;&#8599;
            </a>
          </div>

          <p className="ti-disclosure">
            <strong>Affiliate disclosure:</strong> Golden Horizons may earn a commission if you
            purchase through this Squaremouth link, at no additional cost to you. Squaremouth is a
            comparison marketplace, not an insurance company. Golden Horizons does not select or
            recommend a specific policy. Review the policy documents before purchasing.
          </p>

          <section className="ti-section" aria-labelledby="ti-ask">
            <h2 id="ti-ask">Questions travelers often ask too late</h2>
            <ul className="ti-list">
              <li>What happens if a medical emergency interrupts the trip?</li>
              <li>Who pays if emergency transportation or evacuation is required?</li>
              <li>Would you recover the cost of a canceled or interrupted trip?</li>
              <li>Are pre-existing medical conditions handled under the plan&#8217;s rules?</li>
              <li>Would your current health coverage apply at your destination?</li>
              <li>Are the activities you plan to do covered or excluded?</li>
            </ul>
          </section>

          <section className="ti-callout" aria-labelledby="ti-assume">
            <h2 id="ti-assume">The expensive assumption</h2>
            <p>
              &#8220;I probably do not need travel insurance&#8221; is not a coverage decision. It is
              an assumption. If the trip is canceled, interrupted, or affected by a serious medical
              event, the financial consequences may be much larger than the cost of comparing plans
              in advance.
            </p>
            <p>
              Travel insurance is not right for every traveler or every trip. Compare the terms and
              decide based on your own financial exposure and circumstances.
            </p>
          </section>

          <section className="ti-section" aria-labelledby="ti-who">
            <h2 id="ti-who">It may be especially worth comparing if&#8230;</h2>
            <ul className="ti-list">
              <li>You have significant non-refundable trip expenses.</li>
              <li>You are traveling outside the United States or to a remote destination.</li>
              <li>You are taking a cruise or activities that may be excluded from standard policies.</li>
              <li>You are concerned about emergency medical transportation.</li>
              <li>You have a pre-existing medical condition and need to understand the rules.</li>
              <li>You are traveling for an extended period or testing a destination before relocating.</li>
            </ul>
          </section>

          <section className="ti-section" aria-labelledby="ti-why">
            <h2 id="ti-why">Why use a comparison marketplace?</h2>
            <p className="ti-section-intro">
              Comparing several plans in one place makes it easier to see how providers differ before
              you decide.
            </p>
            <img
              className="ti-plan-img"
              src="/travel-planning.jpg"
              alt="Travel notebook, map, pen, and sunglasses on a table by a window overlooking a coastal destination"
              width={1400}
              height={933}
              loading="lazy"
            />
            <div className="ti-grid">
              <div className="ti-card">
                <strong>Compare multiple providers</strong>
                <span>Review available travel-insurance options in one place.</span>
              </div>
              <div className="ti-card">
                <strong>Review coverage details</strong>
                <span>Compare benefits, limits, exclusions, and prices.</span>
              </div>
              <div className="ti-card">
                <strong>Choose by trip type</strong>
                <span>Look for options for international, cruise, annual, or medical travel.</span>
              </div>
              <div className="ti-card">
                <strong>Read before you buy</strong>
                <span>Use the policy documents to make your final decision.</span>
              </div>
            </div>
          </section>

          <div className="ti-cta" style={{ marginTop: 38 }}>
            <h2>Ready to compare your options?</h2>
            <p>Review plans for your own destination, dates, trip cost, and coverage priorities.</p>
            <a
              className="ti-btn"
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              data-analytics-event="travel_insurance_cta_bottom"
            >
              Compare Plans on Squaremouth&nbsp;&#8599;
            </a>
          </div>

          <section className="ti-notice" aria-labelledby="ti-notice-h">
            <h2 className="ti-notice-title" id="ti-notice-h">Important information notice</h2>
            <p>
              Golden Horizons provides general editorial and educational information only. We do not
              provide insurance, legal, tax, financial, immigration, medical, or retirement advice,
              and we do not recommend any specific policy for your circumstances.
            </p>
            <p>
              Coverage, prices, and terms vary and can change. Always review the policy documents and
              verify details with the insurer or Squaremouth before purchasing.{" "}
              <a href="https://golden-horizons.org/disclaimer">Full Disclaimer &amp; Disclosures &#8594;</a>
            </p>
          </section>
        </div>

        <footer className="ti-footer">
          Golden Horizons may receive compensation from qualifying purchases made through affiliate
          links. This does not increase your cost.
        </footer>
      </main>

      {/* Fires GA4 events on CTA clicks — use these to define your Brevo/GA conversion. */}
      <Script id="ti-analytics" strategy="afterInteractive">
        {`
          document.querySelectorAll('[data-analytics-event]').forEach(function(link){
            link.addEventListener('click', function(){
              if (typeof window.gtag === 'function') {
                window.gtag('event', link.dataset.analyticsEvent, {
                  event_category: 'affiliate_landing_page',
                  event_label: 'squaremouth'
                });
              }
            });
          });
        `}
      </Script>
    </div>
  );
}
