import { createContext, useState, useEffect } from "react";


export const Context = createContext();

export function contextProvider(props) {

  return (
    <Context.Provider
      value={{
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
