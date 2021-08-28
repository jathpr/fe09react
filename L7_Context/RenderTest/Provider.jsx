import { createContext, useContext, useState } from "react";

const valueContext = createContext();
const manipulationContext = createContext();

export const Provider = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <manipulationContext.Provider value={setValue}>
      <valueContext.Provider value={value}>{children}</valueContext.Provider>
    </manipulationContext.Provider>
  );
};

export const useValue = () => useContext(valueContext);
export const useSetValue = () => useContext(manipulationContext);
