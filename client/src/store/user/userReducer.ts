import {Action, Reducer} from "redux";
import {ADD_BOOK, APPROVE, REMOVE_BOOK} from "./userActions";

const initState:any = {
    name:'',
    password:'',
    avatar:'',
    attachedBooks: [],
    booksToSend:[],
    receivedBooks:[
        {name: "Name 1", bookName: "bookName 1",
        profileInfo:{
            city:"Київ",
            toBeReturn:true,
            date: new Date().toLocaleDateString()
        }
        },
        {name: "Name 2", bookName: "bookName 2",
            profileInfo:{
                city:"Київ",
                toBeReturn:true,
                date: new Date().toLocaleDateString()
            }},
        {name: "Name 3", bookName: "bookName 3",
            profileInfo:{
                city:"Львів",
                toBeReturn:false,
                date: null
            }},
        {name: "Name 4", bookName: "bookName 4",
            profileInfo:{
                city:"Харків",
                toBeReturn:false,
                date: null
            }},
        {name: "Name 5", bookName: "bookName 5",
            profileInfo:{
                city:"Київ",
                toBeReturn:false,
                date: null
            }}
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
        case APPROVE:
            return{
                ...state,
                booksToSend:[...state.booksToSend, action.payload],
                receivedBooks: state.receivedBooks
                    .filter(item => item.name !== action.payload.name)
            }
        case ADD_BOOK:
            return{
                ...state,
                attachedBooks:[...state.attachedBooks,action.payload]
            }
    }

    return state;
}