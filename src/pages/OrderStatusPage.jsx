import { useParams } from "react-router-dom";
import OrderCart from "../components/OrderCart/OrderCart";
import useMenu from "../hooks/useMenu";
import { ORDER_API } from "../utils/apis/pizza-order-api";
import { formatTime } from "../constants/format-time";
import Button from "../components/Button/Button";
import { PRIORITIZE } from "../constants/button-text";
import { useState } from "react";

const OrderStatusPage = () => {
  const [setBtnPriority] = useState(false);
  const { id } = useParams();

  const {
    pizzas: { data, error, isLoading },
  } = useMenu(`${ORDER_API}/${id}`);

  console.log({ data, error, isLoading });

  if (isLoading) {
    return <div className="text-lg text-center py-3">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-lg text-center py-3">
        Error fetching order data: {error.message}
      </div>
    );
  }

  if (!data) {
    return <div className="text-xl text-center py-5">Data is loading...</div>;
  }

  const estimatedDelivery = new Date(data.estimatedDelivery);
  const waitTimeMinutes =
    (estimatedDelivery.getTime() - new Date().getTime()) / 60000;

  const setPriority = () => {
    setBtnPriority((prevState) => !prevState);
  };

  return (
    <>
      <div className="max-w-5xl py-6 mx-auto flex justify-between flex-col">
        <div className="mb-7 flex gap-2 justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Order {data.id} status: {data.status}
          </h2>
          <div className="flex gap-7 ">
            {data.priority && (
              <span className="bg-custom-red uppercase font-semibold text-custom-border py-1 px-4 rounded-xl">
                PRIORITY
              </span>
            )}
            {data.status === "preparing" && (
              <span className="bg-green uppercase font-semibold py-1 px-4 rounded-xl">
                PREPARING ORDER
              </span>
            )}
          </div>
        </div>
        <div className="mb-8 bg-custom-border flex justify-between p-2 rounded-xl">
          <p className="text-lg font-semibold">
            Only {waitTimeMinutes.toFixed()} minutes left 😋
          </p>
          <p>(Estimated delivery: {formatTime(estimatedDelivery)})</p>
        </div>
        <div>
          {data.cart.map((product, index) => (
            <OrderCart key={index} {...product} />
          ))}
        </div>
        <div className="mb-5 bg-custom-border p-6 rounded-xl">
          <p className="mb-2">Price pizza: €{data.orderPrice.toFixed(2)}</p>
          <p className="mb-3">
            Price priority: €{data.priorityPrice.toFixed(2)}
          </p>
          <p className="mb-3 text-lg font-semibold">
            To pay on delivery: €
            {(data.orderPrice + data.priorityPrice).toFixed(2)}
          </p>
        </div>
        <div className="text-right">
          <Button onClick={setPriority} text={PRIORITIZE} />
        </div>
      </div>
    </>
  );
};

export default OrderStatusPage;
