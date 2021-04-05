import {LOADING} from "./toolsActions";

export type LoadingType ={
    type:typeof LOADING
    payload:boolean
}

export type ActionsType = LoadingType;