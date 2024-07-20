import { createContext, useState, useContext } from "react";

const inputValueContext = createContext();

export const ValueContext = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <inputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </inputValueContext.Provider>
  );
};

export const useValueContext = () => useContext(inputValueContext);
