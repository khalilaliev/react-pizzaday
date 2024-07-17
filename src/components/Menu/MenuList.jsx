import MenuListItem from "./MenuListItem";

const MenuList = ({
  pizzas,
  showCounter,
  onClick,
  selectedPizza,
  counter,
  decrement,
  increment,
}) => {
  // console.log(pizzas);
  return (
    <ul className=" flex gap-4 py-2 flex-col  text-left">
      {pizzas.map((pizza) => (
        <MenuListItem
          decrement={decrement}
          increment={increment}
          counter={counter}
          selectedPizza={selectedPizza}
          onClick={onClick}
          showCounter={showCounter}
          key={pizza.id}
          pizza={pizza}
        />
      ))}
    </ul>
  );
};

export default MenuList;
