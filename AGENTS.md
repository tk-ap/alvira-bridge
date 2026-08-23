# Agent Instructions

## ALVIRA Bridge Brand Direction

ALVIRA Bridge is a sister product/site to the main ALVIRA product. It should feel like an extension of ALVIRA, not a separate generic SaaS or integrations product.

### Product Architecture

- **ALVIRA = Context Engine** — helps people discover, structure, maintain, and build the context their AI is missing.
- **ALVIRA Bridge = Context Distribution** — carries the user's ALVIRA context into the AI tools they use.
- Bridge fulfills the main ALVIRA promise: **“One profile. Every AI tool.”**

The core product-family narrative is:

**ALVIRA**
> **Build the context your AI is missing.**

Discover → structure → maintain personal AI context.

**ALVIRA Bridge**
> **Take that context everywhere.**

Connect → copy → deploy the ALVIRA profile across AI tools.

Use “Context Engine” and “Context Distribution” primarily as internal product architecture language. Customer-facing copy should remain human + technical rather than infrastructure-first.

## Voice and Copy

Bridge should sound unmistakably like ALVIRA:

- Concise, confident, intelligent, and technically credible.
- Human-centered without being casual or overly conversational.
- Explain the product through the user's relationship with their AI context, not through infrastructure.
- Prefer short, declarative sentences.
- Avoid marketing filler, exaggerated claims, and generic SaaS language.
- Reuse established ALVIRA vocabulary before inventing new terminology.

### Preferred Vocabulary

Prioritize:

- context
- AI profile
- knowledge
- build
- missing context
- take your context everywhere
- one profile
- every AI tool
- portable
- structured
- maintain
- understand

Avoid unnecessary customer-facing terminology such as:

- integration layer
- distribution problem
- integration directory
- integration infrastructure
- stack
- infrastructure-first language

Technical terms are appropriate when describing implementation, but Bridge should not read like a generic developer marketplace.

### Hero Direction

A strong Bridge positioning direction is:

> **Take your ALVIRA profile everywhere.**
>
> Your AI profile shouldn't live in one tool. Use your ALVIRA context across ChatGPT, Claude, Gemini, Cursor, and whatever comes next.

Supporting language may evolve, but should consistently communicate **portability, continuity, and context**.

## Typography and Visual Identity

Bridge should inherit the main ALVIRA visual system wherever technically possible.

- Use the same primary font family as ALVIRA.
- Do not introduce a separate font identity without explicit approval.
- Align heading/body fonts, weights, letter spacing, line heights, button typography, and technical/monospace treatments.
- Reuse ALVIRA design tokens before creating Bridge-specific values.
- Preserve ALVIRA's small monospace/code-style product-label treatment as part of the shared identity.
- A label such as `<alvira-bridge />` is an appropriate expression of this pattern when useful, but it is not required on every page.

## Copy Hierarchy

When practical, mirror the main ALVIRA communication rhythm:

1. Small technical/product label.
2. Large, concise headline communicating the core promise.
3. Short explanatory paragraph.
4. Clear primary and secondary actions.

Bridge's information architecture can remain focused on integrations/distribution, but its positioning should remain unmistakably ALVIRA.

## Cross-Site Alignment Rules

When making product, UX, copy, or visual decisions:

1. Prefer established ALVIRA language over newly invented Bridge terminology.
2. Treat typography and major design tokens as shared ALVIRA brand infrastructure.
3. Make the relationship between **ALVIRA = build context** and **Bridge = take context everywhere** obvious without technical explanation.
4. Do not make Bridge feel like a generic integrations marketplace.
5. New terminology should be introduced only when it materially improves user understanding without fragmenting the ALVIRA vocabulary.
6. If a Bridge-specific requirement conflicts with this family-level direction, document the reason explicitly and preserve the broader ALVIRA relationship.

## Acceptance Criteria

A Bridge change is directionally aligned when:

- A user can immediately understand that Bridge belongs to ALVIRA.
- The headline and supporting copy reinforce the ALVIRA context/AI-profile story.
- Typography and major type treatments feel native to the main ALVIRA product.
- The relationship between building context and taking context everywhere is clear.
- Copy avoids generic integration-marketplace language unless technically necessary.
- Bridge feels like the second half of ALVIRA's existing promise rather than a competing product.

## Repository Context

The Bridge implementation is still being built. Treat this document as the source of truth for the intended product-family relationship while the site evolves. More detailed Bridge-specific requirements can be added here over time, but should preserve the ALVIRA brand architecture above.
