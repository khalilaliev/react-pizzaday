import "@fontsource/source-code-pro";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Card from "./components/Card/Card";
import Basket from "./components/Basket/Basket";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <div className="flex min-h-screen relative items-center text-center">
        <Header />
        <div className="container flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="menu/basket" element={<Basket />} />
            <Route path="menu/order" element={<OrderPage />} />
          </Routes>
        </div>
        <Card />
      </div>
    </>
  );
}

export default App;
