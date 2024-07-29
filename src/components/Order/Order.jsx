// import "./style.css";
import { LABEL_TEXT } from "../../constants/input-text";
import { DESCRIPTION } from "../../constants/main-text";
import InputBox from "../Input/InputBox";
import Button from "../Button/Button";
import { BACK_TO_BASKET, ORDER_NOW } from "../../constants/button-text";
import { GoArrowLeft } from "react-icons/go";
import { Controller } from "react-hook-form";
import useOrder from "../../hooks/useOrder";
import NavButton from "../Button/NavButton";

const Order = () => {
  const {
    goToBasketPage,
    handleSubmit,
    handleSubmitOrderForm,
    control,
    pizza,
    errorMessage,
    isPriority,
    handlePriority,
  } = useOrder();

  return (
    <>
      <div className="max-w-3xl py-6 mx-auto flex justify-between flex-col">
        <NavButton
          onClick={goToBasketPage}
          text={BACK_TO_BASKET}
          icon={<GoArrowLeft />}
        />
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
              <Controller
                control={control}
                name="isPriority"
                render={({ field }) => (
                  <input
                    {...field}
                    className="custom-checkbox"
                    id="checkbox"
                    type="checkbox"
                    checked={isPriority}
                    onChange={handlePriority}
                  />
                )}
              />
              <label className="font-mono tracking-wide" htmlFor="checkbox">
                {LABEL_TEXT.CHECK}
              </label>
            </div>
          </div>
          <div className="flex justify-start">
            <Button
              width="250px"
              text={`${ORDER_NOW} €${pizza.totalPrice.toFixed(2)}`}
            />
          </div>
        </form>
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
      </div>
    </>
  );
};

export default Order;
