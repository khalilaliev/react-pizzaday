import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema } from "../shared/schemaOrder";

const useOrder = () => {
  const pizza = useSelector((state) => state.card);
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "Name",
      phone: "",
      address: "",
      isPriority: false,
    },
    resolver: zodResolver(schema),
  });

  const goToBasketPage = () => {
    navigate("/menu/basket");
  };

  const handleSubmitOrderForm = (data) => {
    console.log(data);
    reset();
  };

  return {
    pizza,
    handleSubmit,
    control,
    goToBasketPage,
    handleSubmitOrderForm,
  };
};

export default useOrder;
