import MenuListItem from "./MenuListItem";

const MenuList = ({ pizzas }) => {
  return (
    <ul className=" flex gap-4 py-2 flex-col  text-left">
      {pizzas.map((pizza) => (
        <MenuListItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
