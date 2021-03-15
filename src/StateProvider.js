//this is a react context API, an alternative to redux.. redux is a much better method but due to time constraints this method is better. might switch given time

//importing the hooks
import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

//higher order component(used to wrap app by allowing a state provider)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//used to pull content from the data layer by using the hook below
export const useStateValue = () => useContext(StateContext);