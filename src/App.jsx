import Header from "./components/Header/Header";
// import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="flex min-h-screen items-center text-center">
        <div className="container">
          <Header />
          <Main />
          {/* <Menu /> */}
        </div>
      </div>
    </>
  );
}

export default App;
