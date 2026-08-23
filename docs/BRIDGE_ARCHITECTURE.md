# ALVIRA Bridge architecture

## North star

Bridge is the **context distribution layer** of the ALVIRA ecosystem. ALVIRA's Context Engine remains the source of truth for the user's operating profile. Bridge consumes that context and exposes it to connected tools.

## Current vertical slice

```text
ALVIRA session
     ↓
Bridge consent
     ↓
one-time authorization code
     ↓
Bridge access token
     ↓
ALVIRA Profile API
     ↓
Bridge MCP / future direct integrations
```

### ALVIRA owns

- Interview and context elicitation
- Profile generation and validation
- Canonical profile storage
- Context quality and provenance
- User account/session authentication

### Bridge owns

- Cross-product connection flow
- Scoped access tokens
- Context distribution
- MCP transport
- Destination-specific adapters as they are implemented

## MCP

The current endpoint is:

`https://alviratech-bridge.vercel.app/api/mcp`

It exposes:

- `alvira://profiles` resource
- `get_alvira_context` tool
- `list_alvira_profiles` tool

The endpoint reads the latest context from ALVIRA on demand. It does not create a second context store.

## Direct integrations

Direct integrations should be added as adapters behind the same provider contract. Each adapter should consume the canonical Bridge access token and request only the minimum scope it needs.

Do not create separate profile copies per destination unless a destination technically requires a cached representation. If caching is required, record provenance and invalidation/freshness metadata.

## Product truthfulness

Marketing copy must distinguish:

- **Live:** ALVIRA connection, profile read API, MCP access.
- **In build:** destination-specific direct integrations and automatic sync adapters.

Never describe a static integration card as a working connection.
