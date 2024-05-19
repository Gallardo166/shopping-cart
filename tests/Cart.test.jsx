import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Data } from "../src/components/Root";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";
import Cart from "../src/components/Cart";

const mockedProducts = [
  {
    category: "electronics",
    title: "Electronics product",
    description: "An electronics product",
    id: 0,
    price: 100,
    rating: {rate: 3.0, count: 5},
  },
  {
    category: "jewelery",
    title: "Jewelery product",
    description: "A jewelery product",
    id: 1,
    price: 200,
    rating: {rate: 3.5, count: 10},
  },
];

const mockedCart = [
  {
    title: "Electronics product",
    id: 0,
    price: 100,
    quantity: 5,
  },
  {
    title: "Jewelery product",
    id: 1,
    price: 200,
    quantity: 11,
  },
];


window.fetch = vi.fn(() => {
  const products = mockedProducts;

  return Promise.resolve({ json: () => Promise.resolve(products) });
});

const useParams = vi.fn();

vi.mock("../src/components/Notification", () => {
  return {
    default: vi.fn(),
  }
})

describe("cart", () => {
  it("shows total price", () => {
    render(
    <Data.Provider value={{ cart: mockedCart, handleAddToCart: vi.fn(), handleDeleteCartItem: vi.fn() }}>
      <Cart />
    </Data.Provider>
    )
    expect(screen.getByText("Total: $2700")).toBeInTheDocument();
  })

  it("allows user to change quantity of item", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/0"],
    });
    const user = userEvent.setup();
    useParams.mockReturnValue({ id: "0" });
    render(
      <RouterProvider router={router} />
    )
    await user.click(await screen.findByRole("button", { name: /^Add to cart$/ }));
    useParams.mockReturnValue({ id: "1" });
    await user.click(screen.getByRole("link", { name: /^Shop$/ }));
    await user.click(screen.getByRole("heading", { name: "Jewelery product" }));
    for (let i=0; i<15; i++) {
      await user.click(screen.getByRole("button", { name: /\+/ }));
    }
    await user.click(screen.getByRole("button", { name: /^Add to cart$/ }))
    await user.click(screen.getByRole("link", { name: /^Cart$/ }));
    const addButtons = screen.getAllByRole("button", { name: /\+/ });
    const subtractButtons = screen.getAllByRole("button", { name: /-/ });
    const inputs = screen.getAllByRole("spinbutton");
    for (let i=0; i<14; i++) {
      await user.click(addButtons[0]);
    }

    expect(inputs[0]).toHaveDisplayValue(15);

    for (let i=0; i<10; i++) {
      await user.click(subtractButtons[1]);
    }

    expect(inputs[1]).toHaveDisplayValue(6);
  })

 it("allows user to delete item", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/0"],
    });
    const user = userEvent.setup();
    useParams.mockReturnValue({ id: "0" });
    render(
      <RouterProvider router={router} />
    )
    await user.click(await screen.findByRole("button", { name: /^Add to cart$/ }));
    useParams.mockReturnValue({ id: "1" });
    await user.click(screen.getByRole("link", { name: /^Shop$/ }));
    await user.click(screen.getByRole("heading", { name: "Jewelery product" }));
    await user.click(screen.getByRole("button", { name: /\+/ }));
    await user.click(screen.getByRole("button", { name: /^Add to cart$/ }))
    await user.click(screen.getByRole("link", { name: /^Cart$/ }));
    const deleteButtons = screen.getAllByRole("button", { name: "Delete Item" });
    
    expect(screen.getByText("Electronics product")).toBeInTheDocument();
    expect(screen.getByText("Jewelery product")).toBeInTheDocument();

    await user.click(deleteButtons[0]);

    expect(screen.queryByText("Electronics product")).not.toBeInTheDocument();
    expect(screen.getByText("Jewelery product")).toBeInTheDocument();

    await user.click(deleteButtons[1]);

    expect(screen.queryByText("Electronics product")).not.toBeInTheDocument();
    expect(screen.queryByText("Jewelery product")).not.toBeInTheDocument();
  })
})