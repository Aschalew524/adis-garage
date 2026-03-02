import type { JobStatus } from "../types";

const LABELS: Record<JobStatus | "active" | "inactive", string> = {
  "checked-in": "Checked in",
  "in-bay": "In bay",
  "waiting-parts": "Waiting on parts",
  ready: "Ready",
  "picked-up": "Picked up",
  active: "Active",
  inactive: "Inactive",
};

interface StatusBadgeProps {
  status: keyof typeof LABELS;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`badge badge--${status}`}>
      <span className="sr-only">Status: </span>
      {LABELS[status]}
    </span>
  );
}
