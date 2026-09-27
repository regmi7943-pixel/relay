import { LeaseManager } from "@relay/core";
import { ResourceURI } from "@relay/protocol";

/**
 * Format a Date object into [HH:MM:SS.mmm] timestamp.
 */
function formatTimestamp(date = new Date()): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ms = String(date.getMilliseconds()).padStart(3, "0");
  return `[${hours}:${minutes}:${seconds}.${ms}]`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runDemo() {
  const relay = new LeaseManager();
  const resource: ResourceURI = "file:src/schema.prisma";

  console.log("\n============================================================");
  console.log("   RELAY // In-Memory Concurrency Control Proof");
  console.log("============================================================\n");

  // 1. agent_01 claims "file:src/schema.prisma" with ttlMs: 5000
  const claim1 = relay.claim({
    resource,
    agentId: "agent_01",
    ttlMs: 5000,
  });

  if (claim1.status === "GRANTED") {
    console.log(
      `${formatTimestamp()} CLAIM ${resource} by agent_01 → GRANTED (${claim1.leaseId})`
    );
  }

  // Small tick
  await sleep(1);

  // 2. Immediately after, agent_02 attempts to claim the same resource
  const claim2 = relay.claim({
    resource,
    agentId: "agent_02",
    ttlMs: 5000,
  });

  if (claim2.status === "CONFLICT") {
    console.log(
      `${formatTimestamp()} CLAIM ${resource} by agent_02 → CONFLICT (held by ${claim2.heldBy}, retry in ${claim2.retryInMs}ms)`
    );
  }

  // Simulate work by agent_01 before releasing
  await sleep(120);

  // 3. agent_01 releases the resource
  relay.release(resource, "agent_01");
  console.log(`${formatTimestamp()} RELEASE ${resource} by agent_01`);

  // Small tick
  await sleep(1);

  // 4. agent_02 claims the resource again
  const claim3 = relay.claim({
    resource,
    agentId: "agent_02",
    ttlMs: 5000,
  });

  if (claim3.status === "GRANTED") {
    console.log(
      `${formatTimestamp()} CLAIM ${resource} by agent_02 → GRANTED (${claim3.leaseId})`
    );
  }

  // Display the immutable audit trail
  console.log("\n------------------------------------------------------------");
  console.log("AUDIT LEDGER (getLog):");
  console.log("------------------------------------------------------------");
  relay.getLog().forEach((evt, idx) => {
    const time = formatTimestamp(new Date(evt.timestamp));
    const padType = evt.type.padEnd(8, " ");
    console.log(`${time} #${idx + 1} ${padType} ${evt.resource} [${evt.agentId}]`);
  });
  console.log("============================================================\n");
}

runDemo().catch((err) => {
  console.error("Demo failed:", err);
  process.exit(1);
});
