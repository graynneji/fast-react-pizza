/* eslint-disable no-unused-vars */
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  //loading indicator
  //one big generic loader with usenavigation
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />

      {/* make it scroll and center the page */}
      {/* argin left and right auto */}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl overflow-scroll">
          {/* <h1> Content</h1> */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
