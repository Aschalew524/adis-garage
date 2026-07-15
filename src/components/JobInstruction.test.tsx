import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { JobInstruction } from "./JobInstruction";

const LONG_NOTE =
  "Customer hears a grind on the first stop after sitting overnight, then it quiets. Rear pads look thin from the last inspection in March.";

describe("Job instruction", () => {
  it("shows short instructions without a read control", () => {
    render(
      <JobInstruction instruction="Four-wheel alignment." instructionId="short" />,
    );
    expect(screen.getByTestId("short-text")).toHaveTextContent(
      "Four-wheel alignment.",
    );
    expect(
      screen.queryByRole("button", { name: "Read full instruction" }),
    ).not.toBeInTheDocument();
  });

  it("clips long instructions and offers a read control", () => {
    render(<JobInstruction instruction={LONG_NOTE} instructionId="long" />);
    const text = screen.getByTestId("long-text");
    expect(text.textContent?.endsWith("…")).toBe(true);
    expect(text.textContent?.length ?? 0).toBeLessThan(LONG_NOTE.length);
    expect(screen.getByRole("button", { name: "Read full instruction" })).toBeEnabled();
  });

  it("keeps the read control keyboard reachable", async () => {
    const user = userEvent.setup();
    render(<JobInstruction instruction={LONG_NOTE} instructionId="long" />);
    await user.tab();
    expect(screen.getByRole("button", { name: "Read full instruction" })).toHaveFocus();
  });
});
