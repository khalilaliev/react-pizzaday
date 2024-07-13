import { pizzas } from "../../data/mock-pizzas-data";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <>
      <div className="max-w-4xl my-0 mx-auto h-calc-100vh-minus-120px">
        {pizzas.length ? <MenuList pizzas={pizzas} /> : null}
      </div>
    </>
  );
};

export default Menu;
