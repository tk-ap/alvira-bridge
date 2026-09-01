# Agent Instructions

## Current Owner-Ratified Product Architecture

This section supersedes earlier repository language that described ALVIRA Bridge as a separate sister product/site.

- **ALVIRA / MeOS = Context Intelligence.** ALVIRA builds, structures, reflects, and maintains the living context AI should understand about the user.
- **ALVIRA Bridge = controlled context delivery.** Bridge is a gated secondary capability inside ALVIRA that carries selected, approved ALVIRA context into external AI tools.
- Canonical customer product: `https://alviratech.vercel.app/`.
- Canonical customer Bridge experience: `/bridge` inside the main ALVIRA application.
- This separate repository may remain useful as an implementation backend, adapter workspace, or migration dependency, but it must not create a standalone customer product, independent profile store, or competing account/navigation architecture.

The durable relationship is:

**ALVIRA builds and reflects living context → Bridge carries approved context to a known destination/purpose.**

## Context-Delivery Boundary

Bridge should deliver the minimum context that is:

- approved for the destination and purpose;
- relevant to the task;
- current enough for the intended use;
- provenance-preserving;
- scoped so unrelated personal/product context is not loaded by default.

Bridge must not:

- become the canonical context store;
- author or silently rewrite ALVIRA context;
- sync everything everywhere by default;
- treat prior successful delivery as standing permission for broader future delivery;
- become the workforce router or execution runtime;
- own generic authorization intelligence;
- imply a live integration before the relevant adapter/delivery behavior is verified.

## Brand, Voice, and Visual Direction

Bridge should feel unmistakably like ALVIRA because it is an ALVIRA capability.

- Reuse ALVIRA identity, typography, navigation patterns, design tokens, profile source-of-truth, and permission language wherever technically possible.
- Keep language concise, confident, intelligent, and technically credible.
- Explain Bridge through the user's relationship with their AI context, not generic integration infrastructure.
- Prefer ALVIRA vocabulary: context, AI profile, knowledge, approved context, portable, structured, direct integration, MCP access, destination, purpose.
- Avoid generic integration-marketplace language, infrastructure-first marketing, or claims that create a second ALVIRA brand/product.
- Technical terms are appropriate in implementation documentation, but customer-facing copy should remain human + technical rather than infrastructure-first.

A suitable promise remains conceptually:

> Take your ALVIRA context everywhere.

Any supporting language must preserve consent, scope, continuity, and provenance rather than imply unrestricted copying.

## Customer-Surface Rules

- Customer-facing Bridge navigation belongs inside the main ALVIRA experience.
- CTAs requiring profile creation, account state, context compilation, or reflection should resolve through ALVIRA.
- Direct integrations, MCP access, and external-tool delivery may be presented as Bridge capabilities inside ALVIRA.
- Do not expose this repository/deployment as a competing standalone acquisition funnel unless the owner explicitly changes the architecture.
- Bridge remains account-gated and subordinate to the core context experience according to ALVIRA product rules.

## Agent OS Control-Plane Integration

This repository participates in `tk-ap/agent-os` as the canonical shared workforce/control-plane layer.

Before material planning or implementation:

1. Read Agent OS `BOOTSTRAP.md` and `registry/product-routing.yaml`.
2. Read this repository's `.agent-os/product.yaml` and `.agent-os/integration-surface.yaml`.
3. Treat the `alvira-bridge` product key as a secondary ALVIRA capability boundary, not an independent public product category.
4. Use `contracts/context-envelope.schema.json` when approved ALVIRA context crosses into a delivery workflow.
5. Use `contracts/outcome-event.schema.json` to return delivery/verification evidence when useful.
6. Route portfolio prioritization to ailhat and shared workforce composition/execution to Agent OS.
7. Generic authorization intelligence remains outside Bridge; LEDGATo is involved only when governance/enforcement is materially relevant.
8. Preserve merge, production, secrets, destructive-action, and other human/policy gates.

The conceptual execution chain is:

`ALVIRA-approved context → context envelope → Bridge delivery task → authorized harness/host or adapter → destination → verification/evidence`

A scheduler, integration credential, or reachable destination never expands the approved context scope.

## Acceptance Criteria

A Bridge change is aligned when:

- it preserves ALVIRA as the context source of truth;
- the customer experience reads as part of ALVIRA rather than a separate SaaS;
- only minimum relevant approved context is carried;
- destination, purpose, scope, freshness, and provenance remain understandable;
- implementation claims are distinguished from proposed/simulated/previewed/verified/deployed states;
- another product's responsibilities are handed off rather than silently absorbed;
- no secret values or reusable credentials are committed to the repository.

## Repository Context

This repository can continue to evolve as a technical Bridge implementation/support surface. Product architecture and shared-workforce boundaries should remain consistent with the canonical ALVIRA instructions and `tk-ap/agent-os` routing source.
