import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("navigations", () => {
  describe("navigations from main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    const user = userEvent.setup();

    it("navigates to shop when clicking 'Shop now' button", async () => {
      render(<RouterProvider router={router} />);
      const shopNowButton = screen.getByText(/^Shop now$/i);

      await user.click(shopNowButton);

      expect(screen.getByRole("heading").textContent).toBe("Products");
    });

    it("navigates to main page when clicking 'Main' button", async () => {
      render(<RouterProvider router={router} />);
      const mainButton = screen.getByText(/^Main$/i);

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      render(<RouterProvider router={router} />);
      const shopButton = screen.getByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading").textContent).toBe("Products");
    });

    it("navigates to about page when clicking 'About' button", async () => {
      render(<RouterProvider router={router} />);
      const aboutButton = screen.getByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading").textContent).toBe("About us");
    })

    it("navigates to shopping cart page when clicking cart icon", async () => {
      render(<RouterProvider router={router} />);
      const cartButton = screen.getByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading").textContent).toBe("Your cart");
    })
  });

  describe("navigations from shop page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      render(<RouterProvider router={router} />);
      const mainButton = screen.getByText(/^Main$/i);

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      render(<RouterProvider router={router} />);
      const shopButton = screen.getByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading").textContent).toBe("Products");
    });

    it("navigates to about page when clicking 'About' button", async () => {
      render(<RouterProvider router={router} />);
      const aboutButton = screen.getByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading").textContent).toBe("About us");
    })

    it("navigates to shopping cart page when clicking cart icon", async () => {
      render(<RouterProvider router={router} />);
      const cartButton = screen.getByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading").textContent).toBe("Your cart");
    })
  });

  describe("navigations from about page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/about"],
    });
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      render(<RouterProvider router={router} />);
      const mainButton = screen.getByText(/^Main$/i);

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      render(<RouterProvider router={router} />);
      const shopButton = screen.getByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading").textContent).toBe("Products");
    });

    it("navigates to about page when clicking 'About' button", async () => {
      render(<RouterProvider router={router} />);
      const aboutButton = screen.getByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading").textContent).toBe("About us");
    })

    it("navigates to shopping cart page when clicking cart icon", async () => {
      render(<RouterProvider router={router} />);
      const cartButton = screen.getByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading").textContent).toBe("Your cart");
    })
  });

  describe("navigations from about page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    it("navigates to main page when clicking 'Main' button", async () => {
      render(<RouterProvider router={router} />);
      const mainButton = screen.getByText(/^Main$/i);

      await user.click(mainButton);

      expect(screen.getByRole("heading").textContent).toBe("LifeStore");
    });

    it("navigates to shop page when clicking 'Shop' button", async () => {
      render(<RouterProvider router={router} />);
      const shopButton = screen.getByText(/^Shop$/i);

      await user.click(shopButton);

      expect(screen.getByRole("heading").textContent).toBe("Products");
    });

    it("navigates to about page when clicking 'About' button", async () => {
      render(<RouterProvider router={router} />);
      const aboutButton = screen.getByText(/^About$/i);

      await user.click(aboutButton);

      expect(screen.getByRole("heading").textContent).toBe("About us");
    })

    it("navigates to shopping cart page when clicking cart icon", async () => {
      render(<RouterProvider router={router} />);
      const cartButton = screen.getByText(/^Cart$/i);

      await user.click(cartButton);

      expect(screen.getByRole("heading").textContent).toBe("Your cart");
    })
  });
});
