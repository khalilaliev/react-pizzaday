import MenuListItem from "./MenuListItem";

const MenuList = ({ pizzas }) => {
  return (
    <>
      <>
        <ul className=" flex gap-4 py-2 flex-col  text-left">
          <MenuListItem pizzas={pizzas} />
        </ul>
      </>
    </>
  );
};

export default MenuList;
