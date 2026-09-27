import {
  ResourceURI,
  ClaimRequest,
  ClaimResponse,
  AuditEvent,
  AuditEventType,
} from "@relay/protocol";

/**
 * Internal lease record stored in memory.
 */
interface LeaseRecord {
  agentId: string;
  expiresAt: number;
  leaseId: string;
}

/**
 * Generate a concise human-readable lease ID (e.g., "lease_ab12").
 */
function generateLeaseId(): string {
  const chars = "abcdef0123456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `lease_${suffix}`;
}

/**
 * In-memory reference implementation of the Relay Lease Manager.
 * Provides mutual exclusion, automatic TTL lease expiry, and append-only audit logging.
 */
export class LeaseManager {
  private leases: Map<ResourceURI, LeaseRecord> = new Map();
  private auditLog: AuditEvent[] = [];

  /**
   * Attempt to claim an exclusive lease on a resource.
   *
   * 1. Purges existing lease if expired.
   * 2. If free, grants lease with generated leaseId and logs CLAIM event.
   * 3. If held by another agent, logs CONFLICT event and returns retryInMs.
   */
  public claim(request: ClaimRequest): ClaimResponse {
    const now = Date.now();
    const existing = this.leases.get(request.resource);

    // 1. Auto-expiry purge: remove lease if past its expiresAt
    if (existing && now >= existing.expiresAt) {
      this.leases.delete(request.resource);
    }

    const activeLease = this.leases.get(request.resource);

    // 2. Resource is free — grant the lease
    if (!activeLease) {
      const leaseId = generateLeaseId();
      const expiresAt = now + request.ttlMs;

      this.leases.set(request.resource, {
        agentId: request.agentId,
        expiresAt,
        leaseId,
      });

      this.pushAuditEvent("CLAIM", request.resource, request.agentId, now);

      return {
        status: "GRANTED",
        leaseId,
        expiresAt,
      };
    }

    // 3. Held by another agent (or active) — return CONFLICT
    const retryInMs = Math.max(1, activeLease.expiresAt - now);
    this.pushAuditEvent("CONFLICT", request.resource, request.agentId, now);

    return {
      status: "CONFLICT",
      heldBy: activeLease.agentId,
      retryInMs,
    };
  }

  /**
   * Release a resource lease.
   * Only removes the lease if currently held by the specified agentId.
   */
  public release(resource: ResourceURI, agentId: string): void {
    const existing = this.leases.get(resource);

    if (existing && existing.agentId === agentId) {
      this.leases.delete(resource);
      this.pushAuditEvent("RELEASE", resource, agentId, Date.now());
    }
  }

  /**
   * Retrieve an immutable snapshot of all recorded audit events.
   */
  public getLog(): AuditEvent[] {
    return [...this.auditLog];
  }

  /**
   * Append an event to the internal audit ledger.
   */
  private pushAuditEvent(
    type: AuditEventType,
    resource: ResourceURI,
    agentId: string,
    timestamp: number
  ): void {
    this.auditLog.push({
      type,
      resource,
      agentId,
      timestamp,
    });
  }
}

/**
 * Factory function to create a new LeaseManager instance.
 */
export function createLeaseManager(): LeaseManager {
  return new LeaseManager();
}
