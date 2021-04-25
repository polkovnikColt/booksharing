import {useEffect} from 'react';
import {useDispatch} from "react-redux";

export const usePreload = (dispatchFunction):void => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dispatchFunction());
    })

}