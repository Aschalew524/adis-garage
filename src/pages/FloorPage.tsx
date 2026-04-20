import { useState } from "react";
import { BayBoard } from "../components/BayBoard";
import { FloorFilters } from "../components/FloorFilters";
import { OrderDrawer } from "../components/OrderDrawer";
import { PartsBoard } from "../components/PartsBoard";
import { useShopDay } from "../hooks/useShopDay";

export function FloorPage() {
  const shop = useShopDay();
  const [openId, setOpenId] = useState<string | null>(null);
  const openOrder = shop.dayOrders.find((order) => order.id === openId);

  return (
    <section>
      <header className="page-head">
        <div>
          <h1>Shop floor</h1>
          <p>Bays, promised times, and advisor instructions for the day.</p>
        </div>
        <p role="status">{shop.dayOrders.length} orders on the floor</p>
      </header>
      <FloorFilters
        technicianId={shop.technicianId}
        onTechnicianChange={shop.setTechnicianId}
        technicians={shop.technicians}
        dateLabel={shop.dateLabel}
        onPreviousDay={shop.goPreviousDay}
        onNextDay={shop.goNextDay}
        onToday={shop.goToday}
      />
      <div className="split">
        <BayBoard
          orders={shop.dayOrders}
          customersById={shop.customersById}
          techniciansById={shop.techniciansById}
          onOpenOrder={setOpenId}
        />
        <PartsBoard holds={shop.dayHolds} customersById={shop.customersById} />
      </div>
      {openOrder ? (
        <OrderDrawer
          order={openOrder}
          customer={shop.customersById[openOrder.customerId]!}
          technician={shop.techniciansById[openOrder.technicianId]!}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </section>
  );
}
