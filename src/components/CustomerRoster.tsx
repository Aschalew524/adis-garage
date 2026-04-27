import { useMemo, useState } from "react";
import type { Customer } from "../types";
import { formatMoney } from "../data/seed";
import { SearchField } from "./SearchField";
import { StatusBadge } from "./StatusBadge";

interface CustomerRosterProps {
  customers: Customer[];
}

function matchesQuery(customer: Customer, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return true;
  }
  return [customer.name, customer.vehicle, customer.plate, customer.phone]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

export function CustomerRoster({ customers }: CustomerRosterProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">(
    "all",
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const visible = useMemo(() => {
    return customers.filter((customer) => {
      const statusOk =
        statusFilter === "all" ? true : customer.status === statusFilter;
      return statusOk && matchesQuery(customer, query);
    });
  }, [customers, query, statusFilter]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setSelectedIds(new Set());
  }

  function handleStatusChange(value: "all" | "active" | "inactive") {
    setStatusFilter(value);
    setSelectedIds(new Set());
  }

  function toggleSelected(id: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="panel">
      <div className="toolbar" style={{ padding: "1rem" }}>
        <SearchField
          id="customer-search"
          label="Search customers"
          value={query}
          onChange={handleQueryChange}
          placeholder="Name, plate, or vehicle"
        />
        <div className="field">
          <label htmlFor="customer-status">Account status</label>
          <select
            id="customer-status"
            value={statusFilter}
            onChange={(event) =>
              handleStatusChange(event.target.value as "all" | "active" | "inactive")
            }
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="selection" role="status">
        <span>
          {visible.length} shown · {selectedIds.size} selected
        </span>
        <span className="muted">
          Selected rows are used for reminder calls and pickup texts.
        </span>
      </div>
      <div className="table-wrap">
        <table>
          <caption className="sr-only">Customer roster</caption>
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name</th>
              <th scope="col">Vehicle</th>
              <th scope="col">Plate</th>
              <th scope="col">Phone</th>
              <th scope="col">Balance</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((customer) => {
              const selected = selectedIds.has(customer.id);
              return (
                <tr key={customer.id} aria-selected={selected}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleSelected(customer.id)}
                      aria-label={`Select ${customer.name}`}
                    />
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.vehicle}</td>
                  <td>{customer.plate}</td>
                  <td>{customer.phone}</td>
                  <td>{formatMoney(customer.balance)}</td>
                  <td>
                    <StatusBadge status={customer.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
