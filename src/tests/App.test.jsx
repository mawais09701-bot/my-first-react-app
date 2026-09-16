import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders Muhammad Awais", async () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    await expect(container).toMatchFileSnapshot("../snapshot.html");
  });

  it("renders Muhammad Ahmad after button Click", async () => {
    const user = userEvent.setup();

    render(<App />);

    const button = screen.getByRole("button", { name: "Change Heading" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/muhammad ahmad/i);
  });
});
