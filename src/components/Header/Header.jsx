import Input from "../Input/Input";

const Header = () => {
  return (
    <>
      <header className="header bg-bg-color w-full fixed top-0 left-0 p-4 flex items-center justify-between">
        <a className="logo text-custom-gray font-mono text-xl" href="/">
          Pizza Day
        </a>
        <Input placeholder="Search for the order #" />
      </header>
    </>
  );
};

export default Header;
