import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Main from "./Main";
import { vi } from "vitest";

vi.mock("react-router-dom", async (importOriginal) => {
  return {
    ...await importOriginal(),
    Link: () => <a role="button">Shop now</a>
  }
})

describe("main page", () => {
  it("renders main page", () => {
    render(<Main />);

    const mainHeading = screen.getByRole("heading");
    const mainText = screen.getByRole("paragraph");
    const image = screen.getByRole("presentation");
    const button = screen.getByRole("button");

    expect(mainHeading).toBeInTheDocument();
    expect(mainText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("renders correct title", () => {
    render(<Main />);

    const mainHeading = screen.getByRole("heading");

    expect(mainHeading.textContent).toBe("LifeStore");
  })

  it("renders correct paragraph", () => {
    render(<Main />);

    const mainText = screen.getByRole("paragraph");

    expect(mainText.textContent).toBe("Where convenience meets quality.");
  })

  it("renders correct button text", () => {
    render(<Main />);

    const button = screen.getByRole("button");

    expect(button.textContent).toBe("Shop now");
  })
})