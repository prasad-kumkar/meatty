// To track the basket

import { createContext, useContext, useReducer } from "react";
import React from 'react'

//Data layer
export const StateContext = createContext()

//Provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>)
}

export const useStateValue = () => useContext(StateContext)

