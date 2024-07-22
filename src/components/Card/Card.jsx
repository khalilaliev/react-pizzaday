import { useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Card = () => {
  const pizza = useSelector((state) => state.card);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMenuCard = pathname === "/menu";

  const goToBasketPage = () => {
    navigate("/menu/basket");
  };

  if (pizza.items.length === 0) {
    return null;
  }

  return (
    <>
      {isMenuCard && (
        <div className="p-5 uppercase font-mono text-xl text-custom-border bg-custom-gray fixed bottom-0 left-0 right-0">
          <div className="flex justify-between items-center">
            <div className="flex justify-between gap-8">
              <p>
                {pizza.totalItems} {pizza.totalItems > 1 ? "Pizzas" : "Pizza"}
              </p>
              <p>€{pizza.totalPrice.toFixed(2)}</p>
            </div>
            <div>
              <button
                onClick={goToBasketPage}
                className="cursor-pointer flex justify-between items-center gap-3"
              >
                Open card <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
