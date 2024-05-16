import Root from "./components/Root";
import Main from "./components/Main";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Main /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
    ]
  },
];

export default routes;
