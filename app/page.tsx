const integrations = [
  {
    name: "ChatGPT",
    type: "Guide + template",
    target: "Custom instructions / memory",
    description:
      "Drop the key sections of your profile into Custom instructions or Memories so every conversation starts already knowing you.",
    action: "Paste into Custom instructions →",
  },
  {
    name: "Claude",
    type: "Guide + template",
    target: "Project knowledge / CLAUDE.md",
    description:
      "Keep your context in CLAUDE.md or Project knowledge so Claude carries your working style into every project and chat.",
    action: "Add to Project knowledge →",
  },
  {
    name: "Gemini",
    type: "Guide + template",
    target: "System instructions",
    description:
      "Use your profile as Gemini's system instructions — a stable base of context that travels with each conversation.",
    action: "Set as system instructions →",
  },
  {
    name: "Cursor",
    type: "Guide + template",
    target: "Rules / AGENTS.md",
    description:
      "Start from your profile when writing AGENTS.md or .cursor/rules so the editor's agents code the way you think.",
    action: "Add to .cursor or AGENTS.md →",
  },
  {
    name: "Your stack",
    type: "Guide",
    target: "Drop-in Markdown",
    description:
      "Because your profile is plain Markdown, you can paste or point most agents at it directly — whatever comes next in your stack.",
    action: "Any tool that reads Markdown →",
  },
];

const problems = [
  ["01", "Write it once, repeat it anyway", "You type the same intro, goals, and preferences into every new agent — then again each time you start fresh."],
  ["02", "Profiles drift out of date", "The copies live in different tools, so when you change how you work, half of them are already stale."],
  ["03", "Context gets trapped per tool", "Memory and project features keep your context locked inside one product, where it can't follow you anywhere else."],
];

const steps = [
  ["01", "Write it once", "Your ALVIRA profile captures who you are and how you work. It stays in one place — the single source of truth."],
  ["02", "Push it everywhere", "Copy the relevant sections into each agent's native context — custom instructions, project knowledge, rules, or plain Markdown."],
  ["03", "Keep it current", "Update the profile once, not in every tool. No more re-explaining yourself when you change how you work."],
  ["04", "Stays honest", "Integrations are guides to what each tool natively supports today — clear about limits, never overstating what the third party offers."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a href="https://alviratech.vercel.app/" className="brand">ALVIRA →</a>
      </nav>

      <section className="hero container">
        <p className="eyebrow">&lt;alvira-bridge /&gt;</p>
        <h1>Take your ALVIRA profile everywhere.</h1>
        <p className="lede">
          Your AI profile shouldn&apos;t live in one tool. Use your ALVIRA context across ChatGPT, Claude, Gemini, Cursor, and whatever comes next.
        </p>
        <div className="actions">
          <a className="button primary" href="#integrations">Browse the integrations</a>
          <a className="button" href="https://alviratech.vercel.app/">Build your profile at ALVIRA</a>
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">The problem</p>
        <h2>You don&apos;t have a context problem. You have a distribution problem.</h2>
        <p className="section-lede">The hard part isn&apos;t capturing who you are — it&apos;s getting that captured context to actually reach every agent, and stay current once it&apos;s there.</p>
        <div className="grid three">
          {problems.map(([num, title, description]) => (
            <article className="card" key={num}><span className="number">{num}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section id="integrations" className="section container">
        <p className="eyebrow">Integrations directory</p>
        <h2>Get your profile into every agent you use.</h2>
        <p className="section-lede">A focused catalog of honest, copy-paste-ready options for the agents you already have. Each is a guide, not a promise — features change, so treat these as a starting point.</p>
        <div className="grid two">
          {integrations.map((integration) => (
            <article className="integration" key={integration.name}>
              <div className="integration-head"><h3>{integration.name}</h3><span>{integration.type}</span></div>
              <strong>{integration.target}</strong>
              <p>{integration.description}</p>
              <a href="#">{integration.action}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section container split">
        <div><p className="eyebrow">Why this works</p><h2>One source, copied once.</h2></div>
        <div><p>Your ALVIRA profile is structured Markdown — the same format most agents already read. That&apos;s what makes these integrations short to set up and easy to keep in sync.</p><p className="muted">Integration guides are general options for each tool&apos;s native features and are not verified against every release.</p></div>
      </section>

      <section className="section container">
        <p className="eyebrow">How it works</p>
        <h2>Your profile flows outward.</h2>
        <p className="section-lede">You keep one shared base profile in ALVIRA. Bridge is the set of simple integrations that push that same context into each agent — so they all start from the same place.</p>
        <div className="grid two">
          {steps.map(([num, title, description]) => (
            <article className="card" key={num}><span className="number">{num}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="cta container">
        <p className="eyebrow">Get connected</p>
        <h2>Start with one shared profile. Use it everywhere.</h2>
        <p>Capture your profile once at ALVIRA, then use Bridge&apos;s integrations to carry it into every agent you reach for.</p>
        <a className="button primary" href="https://alviratech.vercel.app/">Build your profile at ALVIRA →</a>
      </section>

      <footer className="footer container">
        <span>© 2026 ALVIRA Bridge · part of the ALVIRA family</span>
        <a href="https://alviratech.vercel.app/">Back to ALVIRA →</a>
      </footer>
    </main>
  );
}
