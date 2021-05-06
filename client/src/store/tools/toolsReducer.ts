import {ActionsType} from "./toolsActionsType";
import {ToolsState} from "../../types/types";
import {CLOSE_MAIN, LOADING} from "./toolsActions";


const initState: ToolsState = {
    main: true,
    loading: false
}

export const toolsReducer = (state = initState, action: ActionsType) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CLOSE_MAIN:
            return {
                ...state,
                main: action.payload
            }
        default:
            return state;
    }
}