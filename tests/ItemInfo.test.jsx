import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";
import ItemInfo from "../src/components/ItemInfo";

const mockedProduct = {
  category: "elelectronics",
  title: "mocked product",
  description: "a mocked product",
  id: 0,
  rating: {rate: 3.5, count: 10},
  price: 110,
};

window.fetch = vi.fn(() => {
  const products = [mockedProduct];

  return Promise.resolve({ json: () => Promise.resolve(products) });
});

vi.mock("react-router-dom", async (importOriginal) => {
  return {
    ...await importOriginal(),
    useParams: () => ({ id: "0" })
  }
});

vi.mock("../src/components/Notification", () => {
  return {
    default: vi.fn(),
  }
})

describe("item card", () => {
  it("changes the quantity", async () => {
    const user = userEvent.setup();
    render(
      <ItemInfo product={mockedProduct} />
    )
    const addButton = screen.getByRole("button", { name: /^\+$/ });
    const subtractButton = screen.getByRole("button", { name: /^-$/});
    const quantityInput = screen.getByRole("spinbutton", { name: /^Quantity$/ });

    for (let i=0; i<19; i++) {
      await user.click(addButton);
    }

    expect(quantityInput).toHaveValue(20);

    for (let i=0; i<10; i++) {
      await user.click(subtractButton);
    }

    expect(quantityInput).toHaveValue(10);
  })

  it("adds quantity of item to cart", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const addToCartButton = await screen.findByRole("button", { name: /^Add to cart$/ });
    const cartLink = screen.getByRole("link", { name: /^Cart$/ });

    await user.click(addToCartButton);
    await user.click(cartLink);

    expect(screen.getByRole("heading", { name: /^mocked product$/})).toBeInTheDocument;
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
  })
})