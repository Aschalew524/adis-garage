import type { Customer, Technician, WorkOrder } from "../types";
import { WorkTicket } from "./WorkTicket";

interface BayBoardProps {
  orders: WorkOrder[];
  customersById: Record<string, Customer>;
  techniciansById: Record<string, Technician>;
  onOpenOrder: (orderId: string) => void;
}

function groupByBay(orders: WorkOrder[]): [string, WorkOrder[]][] {
  const groups = new Map<string, WorkOrder[]>();
  for (const order of orders) {
    const current = groups.get(order.bay) ?? [];
    current.push(order);
    groups.set(order.bay, current);
  }
  return [...groups.entries()];
}

export function BayBoard({
  orders,
  customersById,
  techniciansById,
  onOpenOrder,
}: BayBoardProps) {
  const bays = groupByBay(orders);

  if (bays.length === 0) {
    return (
      <div className="panel empty" role="status">
        No repair orders are on the floor for this day and technician filter.
      </div>
    );
  }

  return (
    <div className="bays">
      {bays.map(([bay, tickets]) => (
        <section className="bay" key={bay} aria-label={bay}>
          <div className="bay__name">{bay}</div>
          <div className="bays">
            {tickets.map((order) => {
              const customer = customersById[order.customerId];
              const technician = techniciansById[order.technicianId];
              if (!customer || !technician) {
                return null;
              }
              return (
                <WorkTicket
                  key={order.id}
                  order={order}
                  customer={customer}
                  technician={technician}
                  onOpen={onOpenOrder}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
