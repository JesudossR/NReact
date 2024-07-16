import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// const heading=React.createElement("h1",{className:"headermae"},"heading 1");

const AppLayout = () => {
  return (
    <>
      {/* <Heading/> one way */}
      {/* {Heading()} second way because internally it is a js function */}
      <Header />

      <Outlet />
      {/*  keeps on changing for diferent path */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
        element: <Profile />,
          }
        ]
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
