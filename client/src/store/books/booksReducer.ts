import {Reducer} from "redux";
import {LOAD_BOOKS} from "./bookActions";

const initState:{} = {
    books:[
        {title: "Title 1", body: "Body 1"},
        {title: "Title 2", body: "Body 2"},
        {title: "Title 3", body: "Body 3"},
        {title: "Title 4", body: "Body 4"},
        {title: "Title 5", body: "Body 5"},
    ],
}

export const bookReducer:Reducer = (state = initState, action) => {
    switch (action.type){

    }
    return state;
};