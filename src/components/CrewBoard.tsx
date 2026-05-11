import type { Technician, WorkOrder } from "../types";

interface CrewBoardProps {
  technicians: Technician[];
  orders: WorkOrder[];
}

export function CrewBoard({ technicians, orders }: CrewBoardProps) {
  return (
    <div className="crew">
      {technicians.map((technician) => {
        const load = orders.filter((order) => order.technicianId === technician.id);
        const open = load.filter(
          (order) => order.status !== "ready" && order.status !== "picked-up",
        ).length;

        return (
          <article className="panel" key={technician.id} style={{ padding: "1rem" }}>
            <h2>{technician.name}</h2>
            <p className="muted">
              {technician.trade} · {technician.shift} shift
            </p>
            <p>
              {load.length} jobs today · {open} still open
            </p>
            <p className="muted">{technician.bay}</p>
          </article>
        );
      })}
    </div>
  );
}
