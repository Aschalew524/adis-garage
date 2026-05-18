import { CrewBoard } from "../components/CrewBoard";
import { SHOP_DAY, technicians, workOrders } from "../data/seed";

export function CrewPage() {
  const today = workOrders.filter((order) => order.date === SHOP_DAY);

  return (
    <section>
      <header className="page-head">
        <div>
          <h1>Crew load</h1>
          <p>Open jobs by technician, including who still has a bay live.</p>
        </div>
      </header>
      <CrewBoard technicians={technicians} orders={today} />
    </section>
  );
}
