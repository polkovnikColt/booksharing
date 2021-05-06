import React from 'react';
import {Button} from "antd";
import './manipulators.styles.scss';
import {BookInterface, OrderBookInterface, UserInterface} from "../../../types/types";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";

type ButtonManipulateProps = {
    dispatchFunction:any,
    object: UserInterface | BookInterface | OrderBookInterface,
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

    const submitHandler = useDispatchFunc(dispatchFunction)

    return (
        <Button
            className ={`btn-${type}`}
            ghost
            onClick={submitHandler(object)}>
            {text}
        </Button>
    )
}