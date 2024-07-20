import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
// import { createContext } from "react";

// export const userValueContext = createContext("");

function App() {
  return (
    <>
      <div className="flex min-h-screen items-center text-center">
        <div className="container">
          {/* <userValueContext.Provider> */}
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="menu" element={<MenuPage />} />
          </Routes>
          {/* </userValueContext.Provider> */}
        </div>
      </div>
    </>
  );
}

export default App;
