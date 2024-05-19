import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

window.fetch = vi.fn(() => {
  const products = [];

  return Promise.resolve({ json: () => Promise.resolve(products) });
});

describe("navigations", () => {
  describe("navigations from main page", async () => {
    const user = userEvent.setup();

    it("navigates to shop when clicking 'Shop now' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const shopNowButton = await screen.findByText(/^Shop now$/i);

      await user.click(shopNowButton);

      expect(screen.getByRole("heading", {name: /Products/})).toBeInTheDocument();
    });

    it("navigates to main page when clicking 'Main' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const mainButton = await screen.findByRole("img", { name: "logo" });

      await user.click(mainButton);

      expect(screen.getByRole("heading", {name: /LifeStore/})).toBeInTheDocument();
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });  
      render(<RouterProvider router={router} />);
      const shopButton = await screen.findByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading", {name: /Products/})).toBeInTheDocument();
    });

    it("navigates to about page when clicking 'About' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const aboutButton = await screen.findByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading", {name: /About us/})).toBeInTheDocument();
    });

    it("navigates to shopping cart page when clicking cart icon", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const cartButton = await screen.findByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading", {name: /Your cart/})).toBeInTheDocument();
    });
  });

  describe("navigations from shop page", async () => {
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const mainButton = await screen.findByRole("img", { name: "logo" });

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const shopButton = await screen.findByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading", {name: /Products/})).toBeInTheDocument();
      expect(screen.getByRole("heading", {name: /Filter/})).toBeInTheDocument();
    });

    it("navigates to about page when clicking 'About' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const aboutButton = await screen.findByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading", {name: /About us/})).toBeInTheDocument();
    });

    it("navigates to shopping cart page when clicking cart icon", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const cartButton = await screen.findByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading", {name: /Your cart/})).toBeInTheDocument();
    });
  });

  describe("navigations from about page", async () => {
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const mainButton = await screen.findByRole("img", { name: "logo" });

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const shopButton = await screen.findByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading", {name: /Products/})).toBeInTheDocument();
      expect(screen.getByRole("heading", {name: /Filter/})).toBeInTheDocument();
    });

    it("navigates to about page when clicking 'About' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const aboutButton = await screen.findByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading", {name: /About us/})).toBeInTheDocument();
    });

    it("navigates to shopping cart page when clicking cart icon", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const cartButton = await screen.findByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading", {name: /Your cart/})).toBeInTheDocument();
    });
  });

  describe("navigations from cart page", async () => {
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const mainButton = await screen.findByRole("img", { name: "logo" });

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const shopButton = await screen.findByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading", {name: /Products/})).toBeInTheDocument();
      expect(screen.getByRole("heading", {name: /Filter/})).toBeInTheDocument();
    });

    it("navigates to about page when clicking 'About' button", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const aboutButton = await screen.findByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading", {name: /About us/})).toBeInTheDocument();
    });

    it("navigates to shopping cart page when clicking cart icon", async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);
      const cartButton = await screen.findByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading", {name: /Your cart/})).toBeInTheDocument();
    });
  });
});
