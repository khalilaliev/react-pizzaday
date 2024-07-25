import "./style.css";
import { LABEL_TEXT } from "../../constants/input-text";
import { DESCRIPTION } from "../../constants/main-text";
import InputBox from "../Input/InputBox";
import Button from "../Button/Button";
import { BACK_TO_BASKET, ORDER_NOW } from "../../constants/button-text";
import { useSelector } from "react-redux";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../shared/schemaOrder";

const Order = () => {
  const pizza = useSelector((state) => state.card);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
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
  };

  return (
    <>
      <div className="  max-w-3xl mt-28 mx-auto flex justify-between flex-col">
        <button
          onClick={goToBasketPage}
          className="btn-back-to mb-7 flex items-center gap-3 text-blue-700"
        >
          <GoArrowLeft /> {BACK_TO_BASKET}
        </button>
        <h1 className="font-source-code text-2xl text-left tracking-wide mb-9">
          {DESCRIPTION.ORDER}
        </h1>
        <form onSubmit={handleSubmit(handleSubmitOrderForm)}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <InputBox
                {...field}
                type="text"
                text={LABEL_TEXT.FIRST_NAME}
                error={fieldState.error}
                onBlur={field.onBlur}
                onChange={field.onChange}
                name={field.name}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <InputBox
                {...field}
                type="number"
                text={LABEL_TEXT.PHONE_NUMBER}
                error={fieldState.error}
                onBlur={field.onBlur}
                onChange={field.onChange}
                name={field.name}
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <InputBox
                {...field}
                type="text"
                text={LABEL_TEXT.ADDRESS}
                error={fieldState.error}
                onBlur={field.onBlur}
                onChange={field.onChange}
                name={field.name}
              />
            )}
          />

          <div className="mb-8">
            <div className="ml-5 flex gap-4 justify-center items-center">
              <input
                className="custom-checkbox"
                id="checkbox"
                type="checkbox"
              />
              <label className="font-mono tracking-wide" htmlFor="checkbox">
                {LABEL_TEXT.CHECK}
              </label>
            </div>
          </div>
          <div className=" flex justify-start">
            <Button
              width="250px"
              text={`${ORDER_NOW} €${pizza.totalPrice.toFixed(2)}`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
