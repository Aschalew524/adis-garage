import type { Customer, PartsHold, Technician, WorkOrder } from "../types";

export const SHOP_NAME = "Cinderwell Garage";
export const SHOP_DAY = "2026-08-17";

export const technicians: Technician[] = [
  {
    id: "tech-maren",
    name: "Maren Holt",
    trade: "Brakes and suspension",
    bay: "Bay 1",
    shift: "open",
  },
  {
    id: "tech-ibrahim",
    name: "Ibrahim Nassar",
    trade: "Drivability",
    bay: "Bay 2",
    shift: "open",
  },
  {
    id: "tech-june",
    name: "June Pell",
    trade: "Electrical",
    bay: "Bay 3",
    shift: "mid",
  },
  {
    id: "tech-otto",
    name: "Otto Graves",
    trade: "Tires and alignments",
    bay: "Bay 4",
    shift: "mid",
  },
  {
    id: "tech-suki",
    name: "Suki Tran",
    trade: "Service advisor",
    bay: "Write-up",
    shift: "open",
  },
];

export const customers: Customer[] = [
  {
    id: "cus-01",
    name: "Harlan Voss",
    phone: "555-0148",
    vehicle: "2014 Subaru Outback",
    plate: "KND-441",
    status: "active",
    lastVisit: "2026-07-22",
    balance: 0,
  },
  {
    id: "cus-02",
    name: "Nia Calder",
    phone: "555-0190",
    vehicle: "2019 Honda Civic",
    plate: "RPL-208",
    status: "active",
    lastVisit: "2026-08-04",
    balance: 186,
  },
  {
    id: "cus-03",
    name: "Edith Bram",
    phone: "555-0112",
    vehicle: "2008 Ford F-150",
    plate: "QST-773",
    status: "active",
    lastVisit: "2026-06-18",
    balance: 420,
  },
  {
    id: "cus-04",
    name: "Rafi Solano",
    phone: "555-0166",
    vehicle: "2021 Toyota Highlander",
    plate: "MNT-019",
    status: "active",
    lastVisit: "2026-08-11",
    balance: 0,
  },
  {
    id: "cus-05",
    name: "Willa Keene",
    phone: "555-0137",
    vehicle: "2016 VW Golf",
    plate: "BCH-552",
    status: "active",
    lastVisit: "2026-05-09",
    balance: 64,
  },
  {
    id: "cus-06",
    name: "Cormac Duffy",
    phone: "555-0181",
    vehicle: "2012 Chevy Impala",
    plate: "LVR-330",
    status: "inactive",
    lastVisit: "2025-11-14",
    balance: 0,
  },
  {
    id: "cus-07",
    name: "Yara Mendes",
    phone: "555-0124",
    vehicle: "2020 Mazda CX-5",
    plate: "HNK-884",
    status: "active",
    lastVisit: "2026-08-01",
    balance: 95,
  },
  {
    id: "cus-08",
    name: "Pete Lang",
    phone: "555-0175",
    vehicle: "2015 Jeep Cherokee",
    plate: "DWN-612",
    status: "active",
    lastVisit: "2026-04-27",
    balance: 0,
  },
  {
    id: "cus-09",
    name: "Ines Paloma",
    phone: "555-0109",
    vehicle: "2018 Subaru Forester",
    plate: "CRK-147",
    status: "active",
    lastVisit: "2026-07-30",
    balance: 240,
  },
  {
    id: "cus-10",
    name: "Bo Ellery",
    phone: "555-0153",
    vehicle: "2006 Toyota Tacoma",
    plate: "SLT-905",
    status: "inactive",
    lastVisit: "2025-12-02",
    balance: 75,
  },
];

const LONG_VOSS =
  "Customer hears a grind on the first stop after sitting overnight, then it quiets. Rear pads look thin from the last inspection in March. Do not replace rotors unless they are below 22 mm. He commutes the river road and wants the car back before 4 p.m. school pickup. Leave the old pads in a bag in the passenger footwell so he can see the wear.";

const LONG_BRAM =
  "Intermittent no-start after rain. Battery load test passed last month. Check the ground at the fender and the fusible link by the solenoid. Truck lives outside and the inner fender is packed with cinders from the county lot. If we need a starter, call before ordering because Edith wants a reman from Midland, not the dealer unit. Do not keep the truck overnight without asking.";

const LONG_MENDEZ =
  "Cabin lights flicker on washboard roads and the radio resets. Already replaced the battery at a chain shop in June. Trace the body ground behind the driver kick panel and the connector at the BCM. Customer has a toddler seat on the passenger side, so keep that area clean and do not move the seat tracks. She will wait in the office if the diagnosis runs past noon.";

export const workOrders: WorkOrder[] = [
  {
    id: "wo-01",
    customerId: "cus-01",
    technicianId: "tech-maren",
    date: SHOP_DAY,
    bay: "Bay 1",
    kind: "brakes",
    status: "in-bay",
    promisedTime: "16:00",
    concern: "Rear grind on first stop",
    instruction: LONG_VOSS,
    estimate: 420,
  },
  {
    id: "wo-02",
    customerId: "cus-02",
    technicianId: "tech-otto",
    date: SHOP_DAY,
    bay: "Bay 4",
    kind: "tires",
    status: "checked-in",
    promisedTime: "11:30",
    concern: "Alignment after pothole",
    instruction: "Four-wheel alignment and inspect the inner RF edge wear.",
    estimate: 129,
  },
  {
    id: "wo-03",
    customerId: "cus-03",
    technicianId: "tech-ibrahim",
    date: SHOP_DAY,
    bay: "Bay 2",
    kind: "engine",
    status: "waiting-parts",
    promisedTime: "17:30",
    concern: "No-start after rain",
    instruction: LONG_BRAM,
    estimate: 610,
  },
  {
    id: "wo-04",
    customerId: "cus-04",
    technicianId: "tech-suki",
    date: SHOP_DAY,
    bay: "Write-up",
    kind: "inspection",
    status: "checked-in",
    promisedTime: "10:15",
    concern: "State inspection and oil",
    instruction: "Inspection plus 0W-20. Reset maintenance light.",
    estimate: 96,
  },
  {
    id: "wo-05",
    customerId: "cus-05",
    technicianId: "tech-june",
    date: SHOP_DAY,
    bay: "Bay 3",
    kind: "electrical",
    status: "in-bay",
    promisedTime: "15:00",
    concern: "Intermittent window switch",
    instruction: "Driver window drops an inch by itself. Check the regulator connector.",
    estimate: 240,
  },
  {
    id: "wo-06",
    customerId: "cus-07",
    technicianId: "tech-june",
    date: SHOP_DAY,
    bay: "Bay 3",
    kind: "electrical",
    status: "checked-in",
    promisedTime: "13:45",
    concern: "Lights flicker on rough roads",
    instruction: LONG_MENDEZ,
    estimate: 185,
  },
  {
    id: "wo-07",
    customerId: "cus-08",
    technicianId: "tech-maren",
    date: SHOP_DAY,
    bay: "Bay 1",
    kind: "brakes",
    status: "ready",
    promisedTime: "09:40",
    concern: "Front pad slap",
    instruction: "Hardware kit already installed. Test drive the hill by the quarry.",
    estimate: 310,
  },
  {
    id: "wo-08",
    customerId: "cus-09",
    technicianId: "tech-otto",
    date: SHOP_DAY,
    bay: "Bay 4",
    kind: "tires",
    status: "in-bay",
    promisedTime: "14:20",
    concern: "Replace two rears",
    instruction: "Match the Cooper Discoverer AT3 on the rear axle only.",
    estimate: 268,
  },
  {
    id: "wo-09",
    customerId: "cus-02",
    technicianId: "tech-ibrahim",
    date: "2026-08-18",
    bay: "Bay 2",
    kind: "engine",
    status: "checked-in",
    promisedTime: "09:00",
    concern: "Cold idle hunt",
    instruction: "Short follow-up if yesterday's alignment did not change the idle.",
    estimate: 90,
  },
  {
    id: "wo-10",
    customerId: "cus-06",
    technicianId: "tech-suki",
    date: "2026-08-16",
    bay: "Write-up",
    kind: "inspection",
    status: "picked-up",
    promisedTime: "16:30",
    concern: "Declined headliner",
    instruction: "Quoted the headliner. Customer declined and left.",
    estimate: 0,
  },
];

export const partsHolds: PartsHold[] = [
  {
    id: "part-01",
    customerId: "cus-03",
    partName: "Reman starter",
    vendor: "Midland Rebuilders",
    eta: "Tomorrow 10:00",
    note: "Hold the F-150 in Bay 2 until the unit lands.",
  },
  {
    id: "part-02",
    customerId: "cus-05",
    partName: "Window regulator",
    vendor: "Coastal VW",
    eta: "This afternoon",
    note: "If it misses the 3 p.m. run, park the Golf outside.",
  },
  {
    id: "part-03",
    customerId: "cus-09",
    partName: "Two Cooper AT3 225/60R17",
    vendor: "Tire Barn",
    eta: "On the truck",
    note: "Do not mount until Ines confirms the rear-only plan.",
  },
];

export function getCustomer(id: string): Customer | undefined {
  return customers.find((customer) => customer.id === id);
}

export function getTechnician(id: string): Technician | undefined {
  return technicians.find((technician) => technician.id === id);
}

export function shiftDate(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const next = new Date(Date.UTC(year ?? 2026, (month ?? 1) - 1, day ?? 1));
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
}

export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year ?? 2026, (month ?? 1) - 1, day ?? 1));
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
