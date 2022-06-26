import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
  items: [],
  totalItems: 0,
};
// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        totalItems: state.totalItems,
        removeItem,
        addItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
