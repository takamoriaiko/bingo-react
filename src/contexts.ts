import { createContext } from "react";
import { State, Action } from "./reducer";
import { Dispatch } from "redux";

export const StateContext = createContext<State>(undefined as any);
export const DispatchContext = createContext<Dispatch<Action>>(x => x);
