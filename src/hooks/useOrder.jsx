import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema } from "../shared/schemaOrder";
import { ORDER_API } from "../utils/apis/pizza-order-api";
import { useState } from "react";

const useOrder = () => {
  const pizza = useSelector((state) => state.card);
  const [isPriority, setIsPriority] = useState(false);
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      // isPriority: false,
    },
    resolver: zodResolver(schema),
  });

  const goToBasketPage = () => {
    navigate("/menu/basket");
  };

  const handlePriority = (e) => {
    setIsPriority(e.target.checked);
  };

  const handleSubmitOrderForm = async (data) => {
    const orderData = {
      address: data.address,
      customer: data.name,
      phone: data.phone,
      priority: isPriority,
      position: "",
      cart: pizza.items.map((item) => ({
        name: item.name,
        pizzaId: item.id,
        quantity: item.count,
        totalPrice: item.count * item.unitPrice,
        unitPrice: item.unitPrice,
      })),
    };

    console.log("Order Data:", orderData);

    try {
      const response = await fetch(`${ORDER_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();
      if (result.status === "success") {
        navigate(`/menu/order/${result.data.id}`);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return {
    pizza,
    handleSubmit,
    control,
    goToBasketPage,
    handleSubmitOrderForm,
    isPriority,
    handlePriority,
  };
};

export default useOrder;
