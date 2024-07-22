import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Card from "./components/Card/Card";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <>
      <div className="flex min-h-screen relative items-center text-center">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="menu/basket" element={<Basket />} />
          </Routes>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
