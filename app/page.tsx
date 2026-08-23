const integrations = [
  ["ChatGPT", "Custom instructions / memory", "Drop your profile into the context ChatGPT already uses."],
  ["Claude", "Project knowledge / CLAUDE.md", "Keep your working style available across projects."],
  ["Gemini", "System instructions", "Give each conversation the same stable base context."],
  ["Cursor", "Rules / AGENTS.md", "Let coding agents start from how you think and work."],
  ["Microsoft 365", "Copilot context", "Carry your profile into the tools you already use."],
  ["Notion", "Markdown", "Keep a portable version of your profile wherever you work."],
];

const benefits = [
  ["01", "Unified Context", "One ALVIRA profile feeds every tool with the right context, every time."],
  ["02", "You’re in Control", "You decide what’s shared, where it goes, and how it’s used."],
  ["03", "Works Instantly", "Connect once. Your context flows wherever you work."],
];

const steps = [
  ["01", "Connect ALVIRA", "Link your ALVIRA Context Engine to Bridge."],
  ["02", "Choose Your Tools", "Select the AI tools and apps you actually use."],
  ["03", "Bridge Syncs Context", "Carry the right context into each destination."],
  ["04", "Work Seamlessly", "Your context is there — so you can stay in flow."],
];

function NetworkGraphic() {
  return (
    <div className="network" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="network-line line-a" />
      <div className="network-line line-b" />
      <div className="network-line line-c" />
      <div className="network-line line-d" />
      <div className="network-line line-e" />
      <div className="node node-chat">◉</div>
      <div className="node node-claude">✦</div>
      <div className="node node-notion">N</div>
      <div className="node node-slack">✣</div>
      <div className="node node-teams">T</div>
      <div className="core"><span>Λ</span></div>
    </div>
  );
}

function BrandLockup() {
  return (
    <span className="brand-lockup">
      <img src="/brand/alvira-primary-wordmark-dark.svg" alt="ALVIRA" />
      <span className="bridge-name">Bridge</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a href="https://alviratech.vercel.app/" className="brand" aria-label="ALVIRA Bridge home">
          <BrandLockup />
        </a>
        <div className="nav-links">
          <a href="#integrations">Integrations</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#why-bridge">Why Bridge</a>
          <a href="#security">Security</a>
        </div>
        <a className="nav-cta" href="https://alviratech.vercel.app/">Connect Your Tools</a>
      </nav>

      <section className="hero-shell">
        <div className="container hero">
          <div className="hero-copy">
            <p className="eyebrow">&lt;alvira-bridge /&gt;</p>
            <h1>Take your ALVIRA profile <em>everywhere.</em></h1>
            <p className="lede">Your AI profile shouldn&apos;t live in one tool. Bridge carries the context ALVIRA builds into the AI tools you already use — and whatever comes next.</p>
            <div className="actions">
              <a className="button primary" href="https://alviratech.vercel.app/">Connect Your Tools</a>
              <a className="text-link" href="#integrations">Explore Integrations <span>→</span></a>
            </div>
          </div>
          <NetworkGraphic />
        </div>
      </section>

      <section className="tool-strip container" id="integrations">
        <p className="strip-label">WORKS WHERE YOU WORK</p>
        <div className="tool-list">
          {integrations.slice(0, 6).map(([name]) => <span key={name}>{name}</span>)}
          <span className="more">More coming soon</span>
        </div>
      </section>

      <section className="section container" id="why-bridge">
        <div className="why-grid">
          <div>
            <p className="eyebrow">&lt;why-bridge /&gt;</p>
            <h2>Your context.<br /><em>No matter the tool.</em></h2>
            <p className="section-lede">AI tools are powerful, but they don&apos;t remember what the others know. Bridge makes sure they do.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([num, title, description]) => (
              <article className="benefit" key={num}>
                <span className="icon-circle">{num}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-section container" id="how-it-works">
        <p className="eyebrow center">&lt;how-it-works /&gt;</p>
        <h2 className="center-heading">Simple connection. <em>Smarter results.</em></h2>
        <div className="steps">
          {steps.map(([num, title, description], index) => (
            <div className="step" key={num}>
              <div className="step-number">{num}</div>
              <div className="step-icon">{index === 0 ? "＋" : index === 1 ? "⌘" : index === 2 ? "↻" : "✓"}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < steps.length - 1 && <span className="step-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="bridge-cta container" id="security">
        <div>
          <p className="eyebrow">&lt;bridge-your-context /&gt;</p>
          <h2>Bring your context <em>everywhere.</em></h2>
          <p>Stop repeating yourself. Start working in flow.<br />Connect ALVIRA Bridge today.</p>
        </div>
        <div className="cta-actions">
          <a className="button light" href="https://alviratech.vercel.app/">Connect Your Tools</a>
          <a className="light-link" href="#integrations">Learn more about Bridge →</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand"><BrandLockup /><p>Bridge is the context distribution<br />layer of the ALVIRA ecosystem.</p></div>
          <div className="footer-links"><div><b>PRODUCT</b><a href="#integrations">Integrations</a><a href="#how-it-works">How It Works</a><a href="#why-bridge">Why It Works</a><a href="#security">Security</a></div><div><b>COMPANY</b><a href="https://alviratech.vercel.app/">About ALVIRA</a><a href="https://alviratech.vercel.app/">Blog</a><a href="https://alviratech.vercel.app/">Contact</a></div><div><b>LEGAL</b><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#security">Security</a></div></div>
          <div className="ecosystem"><b>BUILT BY ALVIRA</b><p>Context Engine. Data Layer.<br />Workflow Studio. Bridge.</p><strong>One ecosystem. Endless flow.</strong></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 ALVIRA Technologies, Inc.</span><span>&lt;alvira-bridge /&gt;</span></div>
      </footer>
    </main>
  );
}
