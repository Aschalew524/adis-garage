import { render, screen } from "@testing-library/react";
import { PartsBoard } from "./PartsBoard";
import { customers, partsHolds } from "../data/seed";
import type { Customer } from "../types";

const customersById = Object.fromEntries(
  customers.map((customer) => [customer.id, customer]),
) as Record<string, Customer>;

describe("Parts board", () => {
  it("lists parts that should keep a bay open", () => {
    render(<PartsBoard holds={partsHolds} customersById={customersById} />);
    expect(screen.getByText("Reman starter")).toBeInTheDocument();
    expect(screen.getByText("Window regulator")).toBeInTheDocument();
  });

  it("announces an empty hold list", () => {
    render(<PartsBoard holds={[]} customersById={customersById} />);
    expect(
      screen.getByText("No parts are on hold for this shop day."),
    ).toBeInTheDocument();
  });
});
