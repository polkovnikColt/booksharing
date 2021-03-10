import {Action, Reducer} from "redux";
import {REMOVE_BOOK} from "./userActions";

const initState:any = {
    name:'',
    password:'',
    avatar:'',
    attachedBooks: [],
    receivedBooks:[
        {name: "Name 1", bookName: "bookName 1"},
        {name: "Name 2", bookName: "bookName 2"},
        {name: "Name 3", bookName: "bookName 3"},
        {name: "Name 4", bookName: "bookName 4"},
        {name: "Name 5", bookName: "bookName 5"}
        ],

};

export const userReducer:Reducer= (state = initState, action) => {

    switch (action.type){
        case REMOVE_BOOK:
            return {
            ...state,
            receivedBooks: state.receivedBooks
                    .filter(item => item.name !== action.payload)
            }
    }

    return state;
}