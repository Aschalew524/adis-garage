import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FloorFilters } from "./FloorFilters";
import { technicians } from "../data/seed";

describe("Floor filters", () => {
  it("announces the shop day and technician control", async () => {
    const user = userEvent.setup();
    const onTechnicianChange = vi.fn();

    render(
      <FloorFilters
        technicianId="all"
        onTechnicianChange={onTechnicianChange}
        technicians={technicians}
        dateLabel="Monday, August 17, 2026"
        onPreviousDay={() => undefined}
        onNextDay={() => undefined}
        onToday={() => undefined}
      />,
    );

    expect(screen.getByText("Monday, August 17, 2026")).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText("Technician"), "tech-otto");
    expect(onTechnicianChange).toHaveBeenCalledWith("tech-otto");
  });
});
