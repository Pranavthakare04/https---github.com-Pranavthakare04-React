import react from "react";
import reactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import RestaurantCard from "./src/components/RestaurantCard";
import reslist from "./src/utils/mockData";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Footer = () => {
  return <div>footer</div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Body />
      <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
