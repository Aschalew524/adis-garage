import { useEffect, useRef } from "react";
import type { Customer, Technician, WorkOrder } from "../types";
import { formatMoney } from "../data/seed";
import { JobInstruction } from "./JobInstruction";
import { StatusBadge } from "./StatusBadge";

interface OrderDrawerProps {
  order: WorkOrder;
  customer: Customer;
  technician: Technician;
  onClose: () => void;
}

export function OrderDrawer({
  order,
  customer,
  technician,
  onClose,
}: OrderDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="backdrop" role="presentation" onClick={onClose}>
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="ghost" onClick={onClose}>
          Close order
        </button>
        <h2 id="order-drawer-title">{customer.name}</h2>
        <p className="muted">
          {customer.vehicle} · {order.bay} · {technician.name}
        </p>
        <p>
          <StatusBadge status={order.status} />
        </p>
        <p>
          {order.concern} · promised {order.promisedTime} · {formatMoney(order.estimate)}
        </p>
        <JobInstruction
          instruction={order.instruction}
          instructionId={`${order.id}-drawer`}
        />
      </aside>
    </div>
  );
}
