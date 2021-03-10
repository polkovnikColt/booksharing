import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./user/userReducer";
import {bookReducer} from "./books/booksReducer";

export const store = createStore(
    combineReducers({
        user: userReducer,
        book: bookReducer
    }),
    applyMiddleware(thunk));