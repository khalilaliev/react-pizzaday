import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className=" flex min-h-screen  items-center text-center">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
