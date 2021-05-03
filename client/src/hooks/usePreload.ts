import {useEffect} from 'react';
import {useDispatch} from "react-redux";

export const usePreload = (dispatchFunction,credentials = null):void => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(credentials ? dispatchFunction(credentials) : dispatchFunction());
    },[])

}