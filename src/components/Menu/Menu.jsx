import "./style.css";
import MenuList from "./MenuList";
import { API } from "../../utils/apis/pizzas-api";
import useMenu from "../../hooks/useMenu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  AVAILABLE,
  CHEAP,
  EXPENSIVE,
  SORT_BY,
} from "../../constants/value-text";
import { handleSortChange } from "../../utils/filterItems";

const Menu = () => {
  const {
    pizzas: { data },
  } = useMenu(API);
  const [sortedData, setSortedData] = useState();

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (e) => {
    handleSortChange(e, data, setSortedData);
  };

  return (
    <>
      <div className="max-w-4xl py-14 mx-auto ">
        {data?.length && (
          <div className="ml-auto mb-5 relative  w-48">
            <select
              onChange={handleSort}
              className="sort-box block w-full py-2 pl-3 pr-10  rounded-xl appearance-none focus:outline-none "
            >
              <option value={SORT_BY}>Sort by</option>
              <option value={CHEAP}>Cheap to expensive</option>
              <option value={EXPENSIVE}>Expensive to cheap</option>
              <option value={AVAILABLE}>Available</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </span>
          </div>
        )}
        {sortedData?.length ? <MenuList pizzas={sortedData} /> : null}
      </div>
    </>
  );
};

export default Menu;
