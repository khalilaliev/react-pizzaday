import MenuList from "./MenuList";
import { API } from "../../utils/pizzas-api";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const { pizzas, showCounter, selectedPizza, changeState } = useMenu(API);

  return (
    <>
      <div className="max-w-4xl my-0 mx-auto h-calc-100vh-minus-120px">
        {pizzas.data?.length ? (
          <MenuList
            selectedPizza={selectedPizza}
            onClick={changeState}
            showCounter={showCounter}
            pizzas={pizzas.data}
          />
        ) : null}
      </div>
    </>
  );
};

export default Menu;
