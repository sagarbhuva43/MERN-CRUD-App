import React, { useState } from "react";
import { createContext } from "react";

export const ViewContext = createContext();

function ViewContextProvider({ children }) {
  const [id, setId] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const handleChange = (value) => {
    setId(value);
  };

  const handleActive = (value) => {
    setIsActive(value);
  };

  return (
    <ViewContext.Provider value={{ id, handleChange, isActive, handleActive }}>
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContextProvider;
