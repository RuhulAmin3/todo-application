import React, { createContext, useReducer } from "react";
import { initialState } from "./intialState";
import todoReducer from "./reducers/todoReducer";

export const GlobalContext = createContext({});

const { Provider: GlobalProvider } = GlobalContext;

type PropType = {
  children: React.ReactNode | React.ReactElement;
};

const Provider = ({ children }: PropType) => {
  const [states, dispatch] = useReducer(todoReducer, initialState);
  return (
    <GlobalProvider
      value={{
        states,
        dispatch,
      }}
    >
      {children}
    </GlobalProvider>
  );
};

export default Provider;
