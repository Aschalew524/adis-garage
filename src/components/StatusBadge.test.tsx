import { render, screen } from "@testing-library/react";
import { StatusBadge } from "./StatusBadge";

describe("Status badge", () => {
  it("includes a text label so status is not color-only", () => {
    render(<StatusBadge status="waiting-parts" />);
    expect(screen.getByText("Waiting on parts")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
  });
});
