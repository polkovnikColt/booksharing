import {DELETE_BOOK, LOAD_ALL_BOOKS, LOAD_ALL_USERS, LOAD_BOOKS, LOGIN, UNLOG} from "./userActions";
import {ActionsType} from "./userActionTypes";
import {BookInterface, UserInterface} from "../../types/types";
import {UserState} from "../../types/types";

const initState: UserState = {
    credentials: null,
    books: [] as BookInterface[],
    allBooks: [] as BookInterface[],
    allUsers: [] as UserInterface[]
}

export const userReducer = (state = initState, action: ActionsType) => {

    switch (action.type) {
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book: BookInterface) => book.id !== action.payload)
            }
        case LOGIN:
            return {
                ...state,
                credentials: action.payload
            }
        case UNLOG:
            return {
                ...state,
                credentials: action.payload
            }
        case LOAD_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case LOAD_ALL_BOOKS:
            return {
                ...state,
                allBooks:action.payload
            }
        case LOAD_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }

        default:
            return state;
    }
}