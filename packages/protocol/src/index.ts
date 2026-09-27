/**
 * ResourceURI uniquely identifies a shared lockable resource.
 * Example: "file:src/schema.prisma", "db:users:42", "api:stripe:charge"
 */
export type ResourceURI = string;

/**
 * Request payload sent by an agent to claim an exclusive lease on a resource.
 */
export interface ClaimRequest {
  resource: ResourceURI;
  agentId: string;
  ttlMs: number;
}

/**
 * Result returned when a lease claim is successfully granted.
 */
export interface GrantedClaimResponse {
  status: "GRANTED";
  leaseId: string;
  expiresAt: number;
}

/**
 * Result returned when a lease claim encounters a conflict with an active lease.
 */
export interface ConflictClaimResponse {
  status: "CONFLICT";
  heldBy: string;
  retryInMs: number;
}

/**
 * Discriminated union of claim responses.
 */
export type ClaimResponse = GrantedClaimResponse | ConflictClaimResponse;

/**
 * Supported event types recorded in the Relay audit trail.
 */
export type AuditEventType = "CLAIM" | "RELEASE" | "CONFLICT";

/**
 * An immutable audit entry recorded by the lease manager.
 */
export interface AuditEvent {
  type: AuditEventType;
  resource: ResourceURI;
  agentId: string;
  timestamp: number;
}
