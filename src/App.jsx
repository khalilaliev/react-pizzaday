import "@fontsource/source-code-pro";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Card from "./components/Card/Card";
import Basket from "./components/Basket/Basket";
import NotFoundPage from "./pages/NotFoundPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import Order from "./components/Order/Order";

function App() {
  return (
    <>
      <Header />
      <div className="container flex-grow">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="menu/basket" element={<Basket />} />
          <Route path="menu/order" element={<Order />} />
          <Route path="menu/order/:id" element={<OrderStatusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Card />
    </>
  );
}

export default App;
