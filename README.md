# Relay

> **Resource locks for AI agents.**

Relay is a lightweight coordination layer modeled on database transaction locking that prevents multiple parallel AI agents from colliding when touching shared resources (files, APIs, database rows). Agents claim an exclusive lease before mutating a resource, receive a deterministic `CONFLICT` response if another agent holds an active lease, and record every acquisition and release into an append-only audit trail.

- **Landing Page**: [https://relay-one-weld.vercel.app](https://relay-one-weld.vercel.app)
- **RFC Design Document**: [https://relay-one-weld.vercel.app/design](https://relay-one-weld.vercel.app/design)
- **Status**: *In-memory reference implementation only, no networking yet.*

---

## Monorepo Architecture

```
relay/
├── apps/
│   └── site/            # Next.js marketing site & /design RFC documentation
├── packages/
│   ├── protocol/        # Shared TypeScript types (ResourceURI, ClaimRequest, ClaimResponse, AuditEvent)
│   └── core/            # In-memory LeaseManager with TTL auto-expiry & audit logging
├── examples/
│   └── demo.ts          # Contention proof script
├── package.json         # Workspace root configuration
└── tsconfig.json        # Path mappings (@relay/protocol, @relay/core)
```

---

## Quickstart

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Installation & Run Demo

```bash
# Clone and install dependencies
git clone https://github.com/regmi7943-pixel/relay.git
cd relay
npm install

# Run the Day-1 in-memory concurrency proof
npm run demo
```

### Verified Terminal Output

```text
============================================================
   RELAY // In-Memory Concurrency Control Proof
============================================================

[07:31:08.050] CLAIM file:src/schema.prisma by agent_01 → GRANTED (lease_c81f)
[07:31:08.108] CLAIM file:src/schema.prisma by agent_02 → CONFLICT (held by agent_01, retry in 4942ms)
[07:31:08.236] RELEASE file:src/schema.prisma by agent_01
[07:31:08.251] CLAIM file:src/schema.prisma by agent_02 → GRANTED (lease_c7d3)

------------------------------------------------------------
AUDIT LEDGER (getLog):
------------------------------------------------------------
[07:31:08.050] #1 CLAIM    file:src/schema.prisma [agent_01]
[07:31:08.108] #2 CONFLICT file:src/schema.prisma [agent_02]
[07:31:08.236] #3 RELEASE  file:src/schema.prisma [agent_01]
[07:31:08.251] #4 CLAIM    file:src/schema.prisma [agent_02]
============================================================
```

---

## Core Protocol Types

```typescript
import { ResourceURI, ClaimRequest, ClaimResponse, AuditEvent } from "@relay/protocol";

// 1. Claim a resource with TTL
const res = relay.claim({
  resource: "file:src/schema.prisma",
  agentId: "agent_01",
  ttlMs: 5000,
});

// 2. Inspect result
if (res.status === "GRANTED") {
  console.log(`Lock acquired: ${res.leaseId}, expires at ${res.expiresAt}`);
} else {
  console.log(`Contested by ${res.heldBy}, retry in ${res.retryInMs}ms`);
}

// 3. Release when mutation completes
relay.release("file:src/schema.prisma", "agent_01");
```

---

## License

[MIT](LICENSE) © 2026 Kiran Regmi / Relay Contributors
