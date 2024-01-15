import { Children, createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(children) {
  return (
    <GlobalContext.Provider value={{ name: "yakuniy-imtihon" }}>
      {children}
    </GlobalContext.Provider>
  );
}