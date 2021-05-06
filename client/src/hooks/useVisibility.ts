import {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";

export const useVisibility = (initState:boolean, dispatchFunc = null) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(initState);

    const show = (e) => {
        e.stopPropagation();
        setVisible(prev => !prev);
    }

    const shoWithDispatch = () => {
        dispatch(dispatchFunc());
        setVisible(prev => !prev);
    }

    return {visible,show};
}