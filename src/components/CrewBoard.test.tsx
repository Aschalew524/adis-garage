import { render, screen } from "@testing-library/react";
import { CrewBoard } from "./CrewBoard";
import { SHOP_DAY, technicians, workOrders } from "../data/seed";

describe("Crew board", () => {
  it("summarizes each technician's load", () => {
    const today = workOrders.filter((order) => order.date === SHOP_DAY);
    render(<CrewBoard technicians={technicians} orders={today} />);
    expect(screen.getByText("Maren Holt")).toBeInTheDocument();
    expect(screen.getAllByText(/jobs today/).length).toBeGreaterThan(0);
  });
});
