import Header from "./components/Header/Header";
// import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <>
      <div className="flex min-h-screen items-center text-center">
        <div className="container">
          <Header />
          {/* <MainPage /> */}
          <MenuPage />
        </div>
      </div>
    </>
  );
}

export default App;
