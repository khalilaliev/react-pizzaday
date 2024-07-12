import Button from "../Button/Button";
import Input from "../Input/Input";

const Main = () => {
  return (
    <>
      <main className="content">
        <h1 className="title text-3xl mb-5 text-custom-gray  font-mono">
          The best pizza.
          <br />
          <span className="text-yellow text-bg-color  font-mono">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <p className="sub-title  text-custom-gray  mb-6 font-mono">
          👋 Welcome! Please start by telling us your name:
        </p>
        <div className=" flex justify-center gap-3">
          <Input placeholder="Your full name"></Input>
          <Button text="Login" />
        </div>
      </main>
    </>
  );
};

export default Main;
