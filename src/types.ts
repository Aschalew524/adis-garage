export type JobStatus =
  | "checked-in"
  | "in-bay"
  | "waiting-parts"
  | "ready"
  | "picked-up";

export type JobKind =
  | "inspection"
  | "brakes"
  | "engine"
  | "electrical"
  | "tires"
  | "body";

export type ViewName = "floor" | "customers" | "crew";

export interface Technician {
  id: string;
  name: string;
  trade: string;
  bay: string;
  shift: "open" | "mid" | "close";
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
  plate: string;
  status: "active" | "inactive";
  lastVisit: string;
  balance: number;
}

export interface WorkOrder {
  id: string;
  customerId: string;
  technicianId: string;
  date: string;
  bay: string;
  kind: JobKind;
  status: JobStatus;
  promisedTime: string;
  concern: string;
  instruction: string;
  estimate: number;
}

export interface PartsHold {
  id: string;
  customerId: string;
  partName: string;
  vendor: string;
  eta: string;
  note: string;
}
