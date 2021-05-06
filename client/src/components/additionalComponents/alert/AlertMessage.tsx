import React from 'react';
import {Alert, Button, Space} from 'antd';
import './alert.styles.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {closeMain} from "../../../store/tools/toolsActions";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";

type AlertProps = {
    type: "success" | "info" | "warning" | "error",
    message: string
}

export const AlertMessage: React.FC<AlertProps> = (
    {
        type,
        message,
    }
) => {

    const tools = useSelector((store:RootState) => store.tools);
    console.log(tools)
    const onClose = useDispatchFunc(closeMain);

    return (
        <div
            style ={{display: tools.main ? "inherit" : "none"}}
            className="alert-message">
            <Alert
                message={message}
                type={type}
                showIcon
                action={
                    <Button
                        onClick={onClose()}
                        size="small"
                        type="text"
                    >
                        Закрити
                    </Button>
                }
            />
        </div>
    )
}