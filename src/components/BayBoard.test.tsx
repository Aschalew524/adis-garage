import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FloorPage } from "../pages/FloorPage";

describe("Shop floor", () => {
  it("shows today's tickets and parts holds", () => {
    render(<FloorPage />);
    expect(screen.getByText("Harlan Voss")).toBeInTheDocument();
    expect(screen.getByText("Yara Mendes")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Parts hold" })).toBeInTheDocument();
    expect(screen.getByText("Reman starter")).toBeInTheDocument();
  });

  it("filters the floor by technician", async () => {
    const user = userEvent.setup();
    render(<FloorPage />);

    await user.selectOptions(screen.getByLabelText("Technician"), "Otto Graves");

    expect(screen.getByText("Nia Calder")).toBeInTheDocument();
    expect(screen.queryByText("Harlan Voss")).not.toBeInTheDocument();
  });

  it("shows an empty floor two days out", async () => {
    const user = userEvent.setup();
    render(<FloorPage />);

    await user.click(screen.getByRole("button", { name: "Next day" }));
    await user.click(screen.getByRole("button", { name: "Next day" }));

    expect(
      screen.getByText(
        "No repair orders are on the floor for this day and technician filter.",
      ),
    ).toBeInTheDocument();
  });

  it("opens a repair order dialog", async () => {
    const user = userEvent.setup();
    render(<FloorPage />);

    await user.click(
      screen.getByRole("button", { name: /Open repair order for Harlan Voss/i }),
    );

    expect(screen.getByRole("dialog", { name: "Harlan Voss" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close order" })).toHaveFocus();
  });
});
