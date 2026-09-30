import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Email | Golden Horizons",
  description: "Your free guide is on its way. Open your email to get it.",
  robots: { index: false, follow: false },
};

const MAIL_LINKS = [
  {
    label: "Open Gmail",
    href: "https://mail.google.com/mail/u/0/#search/%22Golden+Horizons%22",
    color: "#c5221f",
  },
  {
    label: "Open Yahoo Mail",
    href: "https://mail.yahoo.com",
    color: "#6001d2",
  },
  {
    label: "Open Outlook",
    href: "https://outlook.live.com",
    color: "#0f6cbd",
  },
  {
    label: "Open AOL Mail",
    href: "https://mail.aol.com",
    color: "#1f4e79",
  },
];

const CE_STYLES = `
.ce-wrap { max-width: 560px; margin: 0 auto; padding: 32px 16px 56px; color: #1a0f00; }
.ce-brand { text-align: center; font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding-bottom: 14px; border-bottom: 3px double #1a0f00; margin-bottom: 28px; }
.ce-badge { display: inline-block; font-family: 'EB Garamond', Georgia, serif; font-size: 16px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #8a6a2f; border: 2px solid #8a6a2f; padding: 4px 12px; margin-bottom: 14px; }
.ce-h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 38px; line-height: 1.15; margin: 0 0 14px; }
.ce-lead { font-family: 'EB Garamond', Georgia, serif; font-size: 22px; line-height: 1.45; margin: 0 0 28px; }
.ce-buttons { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
.ce-btn { display: flex; align-items: center; justify-content: center; min-height: 68px; padding: 14px 20px; border-radius: 10px; color: #ffffff; font-family: 'EB Garamond', Georgia, serif; font-size: 24px; font-weight: 700; text-decoration: none; box-shadow: 0 3px 0 rgba(26, 15, 0, 0.35); }
.ce-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 rgba(26, 15, 0, 0.35); }
.ce-btn:focus-visible { outline: 4px solid #8a6a2f; outline-offset: 3px; }
.ce-box { background: #fffdf7; border: 2px solid #1a0f00; padding: 22px 22px 8px; margin-bottom: 24px; }
.ce-box-title { font-family: 'Playfair Display', Georgia, serif; font-size: 24px; margin: 0 0 14px; }
.ce-steps { margin: 0; padding-left: 26px; font-family: 'EB Garamond', Georgia, serif; font-size: 21px; line-height: 1.45; }
.ce-steps li { margin-bottom: 14px; }
.ce-note { font-family: 'EB Garamond', Georgia, serif; font-size: 20px; line-height: 1.45; text-align: center; margin: 0 0 28px; }
.ce-foot { text-align: center; font-family: 'EB Garamond', Georgia, serif; font-size: 16px; color: #5c4a33; border-top: 1px solid #1a0f00; padding-top: 14px; }
@media (max-width: 480px) { .ce-h1 { font-size: 32px; } .ce-lead { font-size: 20px; } }
`;

export default function CheckEmailPage() {
  return (
    <main className="mag-page">
      <div className="site">
        <style>{CE_STYLES}</style>
        <div className="ce-wrap">
          <div className="ce-brand">Golden Horizons</div>

          <span className="ce-badge">One last step</span>
          <h1 className="ce-h1">Your free guide is on its way</h1>
          <p className="ce-lead">
            We just sent it to the email on your Facebook account. Tap your
            email service below to open it.
          </p>

          <div className="ce-buttons">
            {MAIL_LINKS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="ce-btn"
                style={{ backgroundColor: m.color }}
                rel="noopener noreferrer"
              >
                {m.label}
              </a>
            ))}
          </div>

          <div className="ce-box">
            <h2 className="ce-box-title">What to look for</h2>
            <ol className="ce-steps">
              <li>
                An email from <strong>Jeff at Golden Horizons</strong>.
              </li>
              <li>Open it and tap the button inside to get your guide.</li>
              <li>
                Don&apos;t see it? Check your <strong>Promotions</strong> or{" "}
                <strong>Spam</strong> folder. It can take up to 2 minutes to
                arrive.
              </li>
            </ol>
          </div>

          <p className="ce-note">
            Use a different email app? Open it and search for{" "}
            <strong>Golden Horizons</strong>.
          </p>

          <div className="ce-foot">Golden Horizons · golden-horizons.org</div>
        </div>
      </div>
    </main>
  );
}
