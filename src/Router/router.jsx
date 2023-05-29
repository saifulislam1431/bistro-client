import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserHome from "../pages/UserDashboard/UserHome";
import Reservation from "../pages/UserDashboard/Reservation/Reservation";
import Payment from "../pages/UserDashboard/Payment/Payment";
import Review from "../pages/UserDashboard/Review/Review";
import Bookings from "../pages/UserDashboard/Bookings/Bookings";
import Cart from "../pages/UserDashboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <OurMenu></OurMenu>
      },
      {
        path: "shop",
        element: <OurShop></OurShop>
      },
      {
        path: "shop/:category",
        element: <OurShop></OurShop>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashboard",
        element: <UserHome></UserHome>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "myCart",
        element: <Cart></Cart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "review",
        element: <Review></Review>
      },
      {
        path: "booking",
        element: <Bookings></Bookings>
      }
    ]
  }
]);