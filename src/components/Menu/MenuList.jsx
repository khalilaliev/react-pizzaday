import MenuListItem from "./MenuListItem";

const MenuList = ({ pizzas, showCounter, onClick, selectedPizza }) => {
  return (
    <ul className=" flex gap-4 py-2 flex-col  text-left">
      {pizzas.map((pizza) => (
        <MenuListItem
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
