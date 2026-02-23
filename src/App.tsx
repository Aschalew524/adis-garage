import { useState } from "react";
import { ShopShell } from "./components/ShopShell";
import { FloorPage } from "./pages/FloorPage";
import { CustomersPage } from "./pages/CustomersPage";
import { CrewPage } from "./pages/CrewPage";
import type { ViewName } from "./types";

export default function App() {
  const [view, setView] = useState<ViewName>("floor");

  return (
    <ShopShell view={view} onViewChange={setView}>
      {view === "floor" ? <FloorPage /> : null}
      {view === "customers" ? <CustomersPage /> : null}
      {view === "crew" ? <CrewPage /> : null}
    </ShopShell>
  );
}
