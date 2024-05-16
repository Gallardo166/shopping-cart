import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";

const mockedProducts = [
  {
    category: "electronics",
    title: "Electronics product",
  },
  {
    category: "jewelery",
    title: "Jewelery product",
  },
  {
    category: "men's clothing",
    title: "Men's clothing product",
  },
  {
    category: "women's clothing",
    title: "Women's clothing product",
  },
];

vi.mock("react-router-dom", async (importOriginal) => {
  return {
    ...await importOriginal(),
    useOutletContext: () => mockedProducts,
  }
});

vi.mock("../src/components/Card", () => {
  return {
    default: ({ product }) => <p>{product.title}</p>
  }
});

describe("filter products", () => {
  it("shows all products initially", () => {
    render(<Shop products={mockedProducts} />);

    expect(screen.queryByText(/Electronics product/)).toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).toBeInTheDocument();
  })

  it("shows only electronics products when 'electronics' filter is clicked", async () => {
    const user = userEvent.setup();
    render(<Shop products={mockedProducts} />);
    const electronicsCheckbox = screen.getByRole("radio", {name: /Electronics/});

    await user.click(electronicsCheckbox);

    expect(screen.queryByText(/Electronics product/)).toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only jewelery products when 'jewelery' filter is clicked", async () => {
    const user = userEvent.setup();
    render(<Shop products={mockedProducts} />);
    const jeweleryCheckbox = screen.getByRole("radio", {name: /Jewelery/});

    await user.click(jeweleryCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only men's clothing products when 'men's clothing' filter is clicked", async () => {
    const user = userEvent.setup();
    render(<Shop products={mockedProducts} />);
    const mensClothingCheckbox = screen.getByRole("radio", {name: /Men's Clothing/});

    await user.click(mensClothingCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).not.toBeInTheDocument();
  })

  it("shows only women's clothing products when 'women's clothing' filter is clicked", async () => {
    const user = userEvent.setup();
    render(<Shop products={mockedProducts} />);
    const womensClothingCheckbox = screen.getByRole("radio", {name: /Women's Clothing/});

    await user.click(womensClothingCheckbox);

    expect(screen.queryByText(/Electronics product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jewelery product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Men's clothing product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Women's clothing product/)).toBeInTheDocument();
  })
})
