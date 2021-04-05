import {ActionsType} from "./toolsActionsType";
import {ToolsState} from "../../types/types";
import {LOADING} from "./toolsActions";


const initState: ToolsState = {
    loading:false
}

export const toolsReducer = (state = initState, action: ActionsType) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}