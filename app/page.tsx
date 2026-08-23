import { BridgeConnection } from "./components/BridgeConnection";

const integrations = [
  ["ChatGPT", "Direct context connection", "Bridge is the distribution layer for your ALVIRA Profile."],
  ["Claude", "Direct context connection", "Keep your working style available across projects."],
  ["Gemini", "Direct context connection", "Give each conversation the same stable base context."],
  ["Cursor", "Rules / AGENTS.md", "Let coding agents start from how you think and work."],
  ["Microsoft 365", "Copilot context", "Carry your profile into the tools you already use."],
  ["Notion", "Portable context", "Keep a portable version of your profile wherever you work."],
];

const benefits = [
  ["01", "Unified Context", "One ALVIRA profile is the source. Bridge distributes it without rebuilding the Context Engine."],
  ["02", "You’re in Control", "You decide what is shared, where it goes, and which access you revoke."],
  ["03", "MCP Ready", "AI clients can connect to Bridge through a standard MCP endpoint and read your ALVIRA context."],
];

const steps = [
  ["01", "Connect ALVIRA", "Authorize Bridge to read your existing ALVIRA Profile."],
  ["02", "Choose Your Access", "Use Bridge's MCP endpoint or future direct integrations."],
  ["03", "Bridge Reads Context", "Bridge retrieves the current profile from ALVIRA when a connected client requests it."],
  ["04", "Work Seamlessly", "Your AI tools can use the same underlying context without retraining it from scratch."],
];

function NetworkGraphic() {
  return (
    <div className="network" aria-hidden="true">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="network-line line-a" /><div className="network-line line-b" /><div className="network-line line-c" /><div className="network-line line-d" /><div className="network-line line-e" />
      <div className="node node-chat">◉</div><div className="node node-claude">✦</div><div className="node node-notion">N</div><div className="node node-slack">✣</div><div className="node node-teams">T</div>
      <div className="core"><span>Λ</span></div>
    </div>
  );
}

function BrandLockup() {
  return <span className="brand-lockup"><img src="/brand/alvira-primary-wordmark-dark.svg" alt="ALVIRA" /><span className="bridge-name">Bridge</span></span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a href="https://alviratech.vercel.app/" className="brand" aria-label="ALVIRA Bridge home"><BrandLockup /></a>
        <div className="nav-links"><a href="#integrations">Integrations</a><a href="#how-it-works">How It Works</a><a href="#mcp">MCP</a><a href="#why-bridge">Why Bridge</a></div>
        <a className="nav-cta" href="/api/auth/start">Connect ALVIRA</a>
      </nav>

      <section className="hero-shell">
        <div className="container hero">
          <div className="hero-copy">
            <p className="eyebrow">&lt;alvira-bridge /&gt;</p>
            <h1>Take your ALVIRA profile <em>everywhere.</em></h1>
            <p className="lede">Bridge is the context distribution layer of ALVIRA. It consumes the Profile your Context Engine already built and makes that context available to connected AI tools.</p>
            <div className="actions"><a className="button primary" href="/api/auth/start">Connect ALVIRA</a><a className="text-link" href="#mcp">Explore MCP access <span>→</span></a></div>
          </div>
          <NetworkGraphic />
        </div>
      </section>

      <section className="tool-strip container" id="integrations">
        <p className="strip-label">CONTEXT DESTINATIONS</p>
        <div className="tool-list">{integrations.map(([name]) => <span key={name}>{name}</span>)}<span className="more">More integrations coming after the core Bridge API</span></div>
      </section>

      <section className="section container" id="why-bridge">
        <div className="why-grid"><div><p className="eyebrow">&lt;why-bridge /&gt;</p><h2>Your context.<br /><em>No matter the tool.</em></h2><p className="section-lede">ALVIRA remains the source of truth. Bridge handles distribution, permissions, and connected access.</p></div>
          <div className="benefit-grid">{benefits.map(([num,title,description]) => <article className="benefit" key={num}><span className="icon-circle">{num}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section how-section container" id="how-it-works">
        <p className="eyebrow center">&lt;how-it-works /&gt;</p><h2 className="center-heading">Simple connection. <em>Smarter results.</em></h2>
        <div className="steps">{steps.map(([num,title,description], index) => <div className="step" key={num}><div className="step-number">{num}</div><div className="step-icon">{index === 0 ? "＋" : index === 1 ? "⌘" : index === 2 ? "↻" : "✓"}</div><h3>{title}</h3><p>{description}</p>{index < steps.length - 1 && <span className="step-arrow">→</span>}</div>)}</div>
      </section>

      <section className="section container" id="mcp" style={{ paddingTop: 30 }}>
        <div style={{ border: "1px solid rgba(45,155,140,.3)", borderRadius: 14, padding: "36px 32px", background: "rgba(45,155,140,.05)" }}>
          <p className="eyebrow">&lt;mcp /&gt;</p>
          <h2>MCP access to <em>your ALVIRA context.</em></h2>
          <p className="section-lede" style={{ maxWidth: 720 }}>Once connected, Bridge exposes your existing ALVIRA Profiles through a standard Streamable HTTP MCP endpoint. The endpoint reads from ALVIRA; it does not create a second context store.</p>
          <div style={{ marginTop: 24, padding: "16px 18px", borderRadius: 9, background: "#07101b", color: "#dce7e5", fontFamily: "'DM Mono', monospace", fontSize: 12, overflowX: "auto" }}>
            {"https://alviratech-bridge.vercel.app/api/mcp"}
          </div>
          <p style={{ margin: "14px 0 0", color: "#65707b", fontSize: 12 }}>Authenticate with the Bridge access token created when you connect ALVIRA.</p>
        </div>
      </section>

      <section className="bridge-cta container" id="security">
        <div><p className="eyebrow">&lt;bridge-your-context /&gt;</p><h2>Bring your context <em>everywhere.</em></h2><p>Connect ALVIRA once. Let Bridge distribute the context you already built.</p></div>
        <div className="cta-actions"><a className="button light" href="/api/auth/start">Connect ALVIRA</a><a className="light-link" href="https://alviratech.vercel.app/">Build your profile in ALVIRA →</a></div>
      </section>

      <footer className="footer"><div className="container footer-inner"><div className="footer-brand"><BrandLockup /><p>Bridge is the context distribution<br />layer of the ALVIRA ecosystem.</p></div><div className="footer-links"><div><b>PRODUCT</b><a href="#integrations">Integrations</a><a href="#how-it-works">How It Works</a><a href="#mcp">MCP Access</a><a href="#security">Security</a></div><div><b>ALVIRA</b><a href="https://alviratech.vercel.app/">Context Engine</a><a href="https://alviratech.vercel.app/">Build Your Profile</a></div><div><b>LEGAL</b><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div></div><div className="ecosystem"><b>ALVIRA ECOSYSTEM</b><p>Context Engine → Bridge<br />→ Workflow Studio → AI Agents</p><strong>Your Context. Everywhere.</strong></div></div><div className="container footer-bottom"><span>© 2026 ALVIRA Technologies, Inc.</span><span>&lt;alvira-bridge /&gt;</span></div></footer>
    </main>
  );
}
