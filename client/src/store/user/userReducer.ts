import {
    ADD_BOOK,
    ADD_COMMENT,
    ADD_FAVORITE,
    ADD_TO_PREFERENCE,
    APPROVE_ORDER,
    DELETE_BOOK,
    DELETE_FAVORITE,
    DISORDER_BOOK,
    LOAD_ALL_BOOKS,
    LOAD_ALL_ORDERS,
    LOAD_ALL_USERS,
    LOAD_BOOKS,
    LOAD_PREFERENCE,
    LOAD_USER_COMMENTS,
    LOGIN,
    ORDER_BOOK,
    UNLOG,
    UPDATE_BOOK,
    UPDATE_USER
} from "./userActions";
import {ActionsType} from "./userActionTypes";
import {
    BookInterface,
    CommentInterface,
    OrderBookInterface,
    PreferenceInterface,
    UserInterface,
    UserState
} from "../../types/types";

const initState: UserState = {
    credentials: null,
    books: [] as BookInterface[],
    allBooks: [] as BookInterface[],
    allUsers: [] as UserInterface[],
    comments: [] as CommentInterface[],
    orders: [] as OrderBookInterface[],
    preference: {} as PreferenceInterface
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
                allBooks: action.payload
            }
        case ORDER_BOOK:
            return {
                ...state,
                orders: [...state.orders, action.payload],
                allBooks: state.allBooks.map(book => {
                    if (book.id === action.payload.bookGetId ||
                        book.id === action.payload.bookSendId) {
                        return {...book, isOrdered: true};
                    }
                    return book;
                })
            }
        case DISORDER_BOOK:
            return {
                ...state,
                orders: state.orders
                    .filter(order => order.id !== action.payload.id),
                allBooks: state.allBooks.map(book => {
                    if (book.id === action.payload.bookGetId ||
                        book.id === action.payload.bookSendId) {
                        return {...book, isOrdered: false};
                    }
                    return book;
                })
            }
        case APPROVE_ORDER:
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order.id === action.payload.id) {
                        return {...order, isFinished: true}
                    }
                    return order;
                }),
                allBooks: state.allBooks.filter(book =>
                    book.id === action.payload.bookSendId
                    || book.id === action.payload.bookGetId)
            }
        case ADD_TO_PREFERENCE:
            return {
                ...state,
                preference: {...state.preference,
                    author: [...state.preference.author, action.payload.author],
                    genre: [...state.preference.genre, action.payload.genre],
                }
            }
        case LOAD_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case LOAD_PREFERENCE:
            console.log('reducer', action.payload)
            return {
                ...state,
                preference: action.payload
            }
        case LOAD_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case LOAD_USER_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case ADD_BOOK:
            return {
                ...state,
                allBooks: [...state.allBooks, action.payload]
            }
        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map(book => {
                    if (book.id === action.payload.id) {
                        return {...book, ...action.payload};
                    }
                    return book;
                })
            }
        case UPDATE_USER:
            return {
                ...state,
                credentials: {...state.credentials, ...action.payload}
            }
        case ADD_FAVORITE:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    favorite: [...state.credentials.favorite, action.payload.bookId]
                }
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    favorite: state.credentials
                        .favorite
                        .filter(id => id !== action.payload.bookId)
                }
            }
        default:
            return state;
    }
}