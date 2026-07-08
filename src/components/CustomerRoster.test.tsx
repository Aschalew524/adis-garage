import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomerRoster } from "./CustomerRoster";
import { customers } from "../data/seed";

describe("Customer roster", () => {
  it("filters by name and account status", async () => {
    const user = userEvent.setup();
    render(<CustomerRoster customers={customers} />);

    await user.type(screen.getByLabelText("Search customers"), "Voss");
    expect(screen.getByText("Harlan Voss")).toBeInTheDocument();
    expect(screen.queryByText("Nia Calder")).not.toBeInTheDocument();

    await user.clear(screen.getByLabelText("Search customers"));
    await user.selectOptions(screen.getByLabelText("Account status"), "Inactive");

    expect(screen.getByText("Cormac Duffy")).toBeInTheDocument();
    expect(screen.queryByText("Harlan Voss")).not.toBeInTheDocument();
  });

  it("lets advisors select visible rows", async () => {
    const user = userEvent.setup();
    render(<CustomerRoster customers={customers} />);

    await user.click(screen.getByLabelText("Select Harlan Voss"));
    await user.click(screen.getByLabelText("Select Nia Calder"));

    expect(screen.getByText(/2 selected/)).toBeInTheDocument();
    expect(screen.getByLabelText("Select Harlan Voss")).toBeChecked();
  });
});
