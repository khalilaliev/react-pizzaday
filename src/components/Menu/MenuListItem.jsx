import Button from "../Button/Button";

const MenuListItem = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((item) => {
        return (
          <li
            className="bg-white shadow-md rounded-md flex  items-center p-4 "
            key={item.id}
          >
            {item.soldOut ? (
              <img
                src={item.imageUrl}
                className="pizza__image w-28 h-28 rounded-md object-cover filter grayscale"
              />
            ) : (
              <img
                src={item.imageUrl}
                className="pizza__image w-28 h-28 rounded-md object-cover "
              />
            )}
            <div className="pizza__info ml-4 flex-grow">
              <p className="pizza__name text-lg font-semibold text-custom-gray">
                {item.name}
              </p>
              <p className="pizza__ingredients text-gray-500 italic text-custom-gray">
                {item.ingredients.join(", ")}
              </p>
              <div className="pizza__actions flex items-center justify-between mt-2">
                {item.soldOut ? (
                  <p className=" uppercase font-semibold text-custom-gray">
                    Sold out
                  </p>
                ) : (
                  <>
                    <p className="pizza__price text-lg font-normal mt-2 text-custom-gray">
                      €{item.unitPrice}
                    </p>
                    <Button className={"p-4"} text="Add to card" />
                  </>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default MenuListItem;
