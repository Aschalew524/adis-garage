import type { Customer, PartsHold } from "../types";

interface PartsBoardProps {
  holds: PartsHold[];
  customersById: Record<string, Customer>;
}

export function PartsBoard({ holds, customersById }: PartsBoardProps) {
  if (holds.length === 0) {
    return (
      <div className="panel empty" role="status">
        No parts are on hold for this shop day.
      </div>
    );
  }

  return (
    <aside className="panel holds" aria-labelledby="parts-heading">
      <h2 id="parts-heading">Parts hold</h2>
      <p className="muted">Do not close these bays until the parts land.</p>
      <ul>
        {holds.map((hold) => {
          const customer = customersById[hold.customerId];
          return (
            <li key={hold.id}>
              <strong>{hold.partName}</strong>
              <p className="muted">
                {customer?.name ?? "Unknown"} · {hold.vendor} · {hold.eta}
              </p>
              <p>{hold.note}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
