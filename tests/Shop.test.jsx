import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";
import { Data } from "../src/components/Root";
import { BrowserRouter, Link, RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";

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
  {
    category: "men's clothing",
    title: "Men's clothing product",
    description: "A men's clothing product",
    id: 2,
    price: 150,
    rating: {rate: 4.0, count: 12},
  },
  {
    category: "women's clothing",
    title: "Women's clothing product",
    description: "A women's clothing product",
    id: 3,
    price: 250,
    rating: {rate: 4.5, count: 11},
  },
];

window.fetch = vi.fn(() => {
  const products = mockedProducts;

  return Promise.resolve({ json: () => Promise.resolve(products) });
});

vi.mock("../src/components/Card", () => {
  return {
    default: ({ product }) => 
      <Link to={`./${product.id}`} data-testid={`${product.title} card`}>
        <p>{product.title}</p>
      </Link>
  }
});

describe("filter products", () => {
  it("shows all products initially", () => {
    render(
    <Data.Provider value={{products: mockedProducts}}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Data.Provider>
    );

    expect(screen.queryByText(/Electronics product/)).toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).toBeInTheDocument();
  })

  it("shows only electronics products when 'electronics' filter is clicked", async () => {
    const user = userEvent.setup();
    render(
    <Data.Provider value={{products: mockedProducts}}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Data.Provider>
    );
    const electronicsCheckbox = screen.getByRole("radio", {name: /Electronics/});

    await user.click(electronicsCheckbox);

    expect(screen.queryByText(/Electronics product/)).toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only jewelery products when 'jewelery' filter is clicked", async () => {
    const user = userEvent.setup();
    render(
    <Data.Provider value={{products: mockedProducts}}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Data.Provider>
    );
    const jeweleryCheckbox = screen.getByRole("radio", {name: /Jewelery/});

    await user.click(jeweleryCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only men's clothing products when 'men's clothing' filter is clicked", async () => {
    const user = userEvent.setup();
    render(
    <Data.Provider value={{products: mockedProducts}}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Data.Provider>
    );
    const mensClothingCheckbox = screen.getByRole("radio", {name: /Men's Clothing/});

    await user.click(mensClothingCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only women's clothing products when 'women's clothing' filter is clicked", async () => {
    const user = userEvent.setup();
    render(
    <Data.Provider value={{products: mockedProducts}}>
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    </Data.Provider>
    );
    const womensClothingCheckbox = screen.getByRole("radio", {name: /Women's Clothing/});

    await user.click(womensClothingCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).toBeInTheDocument();
  })
})

describe("shows full item description when card is clicked", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/shop"],
  });
  
  it("shows full item description when card is clicked", async () => {
    const user = userEvent.setup();
    render(
      <RouterProvider router={router} />
    );
    const electronicsCard = await screen.findByTestId("Electronics product card");

    await user.click(electronicsCard);

    expect(screen.getByRole("heading", {name: /Electronics product/})).toBeInTheDocument();
    expect(screen.getByText(/An electronics product/)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /\+/})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /-/})).toBeInTheDocument();
  });

})
