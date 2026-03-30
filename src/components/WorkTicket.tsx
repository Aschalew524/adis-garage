import type { Customer, Technician, WorkOrder } from "../types";
import { formatMoney } from "../data/seed";
import { JobInstruction } from "./JobInstruction";
import { StatusBadge } from "./StatusBadge";

const KIND_LABELS = {
  inspection: "Inspection",
  brakes: "Brakes",
  engine: "Engine",
  electrical: "Electrical",
  tires: "Tires",
  body: "Body",
} as const;

interface WorkTicketProps {
  order: WorkOrder;
  customer: Customer;
  technician: Technician;
  onOpen: (orderId: string) => void;
}

export function WorkTicket({
  order,
  customer,
  technician,
  onOpen,
}: WorkTicketProps) {
  return (
    <article>
      <button
        type="button"
        className="ticket"
        onClick={() => onOpen(order.id)}
        aria-label={`Open repair order for ${customer.name} in ${order.bay}`}
      >
        <div className="ticket__top">
          <div>
            <h2>{customer.name}</h2>
            <p className="muted">
              {customer.vehicle} · {order.bay} · promised {order.promisedTime}
            </p>
          </div>
          <StatusBadge status={order.status} />
        </div>
        <div className="chips">
          <span className="chip">{KIND_LABELS[order.kind]}</span>
          <span className="chip">{order.concern}</span>
          <span className="chip">{technician.name}</span>
          <span className="chip">{formatMoney(order.estimate)}</span>
        </div>
      </button>
      <JobInstruction instruction={order.instruction} instructionId={order.id} />
    </article>
  );
}
