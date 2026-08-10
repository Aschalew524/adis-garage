import { render, screen } from "@testing-library/react";
import { WorkTicket } from "./WorkTicket";
import { getCustomer, getTechnician, workOrders } from "../data/seed";

describe("Work ticket", () => {
  it("shows the customer, bay, and concern", () => {
    const order = workOrders[0];
    const customer = getCustomer(order!.customerId)!;
    const technician = getTechnician(order!.technicianId)!;

    render(
      <WorkTicket
        order={order!}
        customer={customer}
        technician={technician}
        onOpen={() => undefined}
      />,
    );

    expect(screen.getByRole("heading", { name: customer.name })).toBeInTheDocument();
    expect(screen.getByText(/Bay 1/)).toBeInTheDocument();
    expect(screen.getByText("Rear grind on first stop")).toBeInTheDocument();
  });
});
