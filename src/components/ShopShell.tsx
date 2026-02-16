import type { ReactNode } from "react";
import type { ViewName } from "../types";
import { SHOP_NAME } from "../data/seed";

const LINKS: { view: ViewName; label: string }[] = [
  { view: "floor", label: "Shop floor" },
  { view: "customers", label: "Customers" },
  { view: "crew", label: "Crew" },
];

interface ShopShellProps {
  view: ViewName;
  onViewChange: (view: ViewName) => void;
  children: ReactNode;
}

export function ShopShell({ view, onViewChange, children }: ShopShellProps) {
  return (
    <div className="shell">
      <aside className="rail">
        <div className="brand">
          <div className="brand__name">{SHOP_NAME}</div>
          <div className="brand__sub">Service desk</div>
        </div>
        <nav className="nav" aria-label="Shop sections">
          {LINKS.map((link) => (
            <button
              key={link.view}
              type="button"
              aria-current={view === link.view ? "page" : undefined}
              onClick={() => onViewChange(link.view)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
