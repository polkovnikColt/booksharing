import React from 'react';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import './manipulators.styles.scss';
import {BookInterface, UserInterface} from "../../../types/types";

type ButtonManipulateProps = {
    dispatchFunction:any,
    object: UserInterface | BookInterface,
    text: string,
    type: "update" | "delete"

}

export const ButtonManipulate: React.FC<ButtonManipulateProps> = (
    {
        dispatchFunction,
        object,
        text,
        type
    }
) => {

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(dispatchFunction(object));
    }

    return (
        <Button
            className ={`btn-${type}`}
            ghost
            onClick={submitHandler}>
            {text}
        </Button>
    )
}