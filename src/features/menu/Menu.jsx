/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  //custom hook to get data
  //react router will start fecthing the data at the same time it starts rendering the routes
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//create a loader react router dom @ 6
export async function loader() {
  //call the fetch in the apiResturant getMenu
  const menu = await getMenu();
  return menu;
}
export default Menu;
