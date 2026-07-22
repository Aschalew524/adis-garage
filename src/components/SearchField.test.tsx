import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchField } from "./SearchField";
import { useState } from "react";

function Harness() {
  const [value, setValue] = useState("");
  return (
    <SearchField
      id="plate-search"
      label="Find a plate"
      value={value}
      onChange={setValue}
    />
  );
}

describe("Search field", () => {
  it("exposes a labelled field and updates its value", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const field = screen.getByLabelText("Find a plate");
    await user.type(field, "KND-441");
    expect(field).toHaveValue("KND-441");
  });
});
