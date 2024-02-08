import React, { createContext, useReducer } from "react";
import { InitialStateType, TodoType, initialState } from "./intialState";
import todoReducer from "./reducers/todoReducer";

interface ContextType {
  states: InitialStateType;
  dispatch: React.Dispatch<{ payload: string | TodoType; type: string }>;
}

export const GlobalContext = createContext<ContextType>({
  states: initialState,
  dispatch: () => {},
});

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
