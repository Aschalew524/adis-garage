import { useMemo, useState } from "react";
import {
  customers,
  formatDisplayDate,
  partsHolds,
  SHOP_DAY,
  shiftDate,
  technicians,
  workOrders,
} from "../data/seed";
import type { Customer, Technician } from "../types";

export function useShopDay(initialDate = SHOP_DAY) {
  const [date, setDate] = useState(initialDate);
  const [technicianId, setTechnicianId] = useState("all");

  const customersById = useMemo(() => {
    return Object.fromEntries(
      customers.map((customer) => [customer.id, customer]),
    ) as Record<string, Customer>;
  }, []);

  const techniciansById = useMemo(() => {
    return Object.fromEntries(
      technicians.map((technician) => [technician.id, technician]),
    ) as Record<string, Technician>;
  }, []);

  const dayOrders = useMemo(() => {
    return workOrders
      .filter((order) => order.date === date)
      .filter((order) =>
        technicianId === "all" ? true : order.technicianId === technicianId,
      )
      .slice()
      .sort((left, right) => left.promisedTime.localeCompare(right.promisedTime));
  }, [date, technicianId]);

  const dayHolds = useMemo(() => {
    const ids = new Set(dayOrders.map((order) => order.customerId));
    return partsHolds.filter((hold) => ids.has(hold.customerId));
  }, [dayOrders]);

  return {
    date,
    dateLabel: formatDisplayDate(date),
    technicianId,
    setTechnicianId,
    customers,
    technicians,
    customersById,
    techniciansById,
    dayOrders,
    dayHolds,
    goToday: () => setDate(SHOP_DAY),
    goPreviousDay: () => setDate((current) => shiftDate(current, -1)),
    goNextDay: () => setDate((current) => shiftDate(current, 1)),
  };
}
