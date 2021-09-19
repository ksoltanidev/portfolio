import React, { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = ({children}) => {
  const [cursor, setCursor] = useState({ active: {value: false, x:0, y:0} });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;