"use client";
import React from "react";
import { AppContext, withHandlerContext } from "./withHandlerContext";

const Context = React.createContext<AppContext>({});

export const HandlerContextProvider = ({
  children,
  components: _components = {},
}) => {
  const context = {};
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useHandlerContext() {
  const ctx = React.useContext(Context);
  return {
    withHandlerContext: withHandlerContext(ctx),
  };
}