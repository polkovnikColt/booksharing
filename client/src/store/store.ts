import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./user/userReducer";
import {ToolsState, UserState} from "../types/types";
import {toolsReducer} from "./tools/toolsReducer";



export type RootState = {
    user: UserState
    tools: ToolsState
}

export const store = createStore(
    combineReducers({
        user: userReducer,
        tools:toolsReducer
    }),
    applyMiddleware(thunk));