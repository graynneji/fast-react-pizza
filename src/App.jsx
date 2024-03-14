//data fetching in a router use createBrowserRouter the old way cannot be used to load data or send data in forms
//data loader, data catons, data fetchers apis
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { action as updatesOrdersActions } from "./features/order/UpdatesOrders";
const router = createBrowserRouter([
  //Parent routes
  //no need for path because its only purpose is providing a layout for the application
  {
    element: <AppLayout />,
    //errors that happen in the nested routes will bubble up to the parent routes
    errorElement: <Error />,
    children: [
      //Home route
      {
        path: "/",
        element: <Home />,
      },
      //Menu route
      {
        path: "/menu",
        element: <Menu />,
        //provide this loader function to the menu route
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updatesOrdersActions,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
