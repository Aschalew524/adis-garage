import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Cinderwell garage board", () => {
  it("opens on the shop floor", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Shop floor" })).toBeInTheDocument();
    expect(screen.getByText("Harlan Voss")).toBeInTheDocument();
  });

  it("moves between shop sections", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Customers" }));
    expect(screen.getByRole("heading", { name: "Customers" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Crew" }));
    expect(screen.getByRole("heading", { name: "Crew load" })).toBeInTheDocument();
    expect(screen.getByText("Maren Holt")).toBeInTheDocument();
  });
});
