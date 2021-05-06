import {CLOSE_MAIN, LOADING} from "./toolsActions";

export type LoadingType ={
    type:typeof LOADING
    payload:boolean
}

export type CloseType = {
    type: typeof CLOSE_MAIN
    payload: boolean
}

export type ActionsType = LoadingType | CloseType;