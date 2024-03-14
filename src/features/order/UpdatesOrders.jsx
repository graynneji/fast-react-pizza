/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdatesOrders() {
  //to write data we do not use fetcher.load instead we use a
  //form component that the fetcher provides
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="small">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdatesOrders;
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
