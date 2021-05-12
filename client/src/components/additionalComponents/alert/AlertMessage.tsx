import React from 'react';
import {Alert, Button, Space} from 'antd';
import './alert.styles.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {closeMain} from "../../../store/tools/toolsActions";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";

type AlertProps = {
    type: "success" | "info" | "warning" | "error",
}

export const AlertMessage: React.FC<AlertProps> = (
    {
        type,
        children,
    }
) => {

    const tools = useSelector((store: RootState) => store.tools);
    const onClose = useDispatchFunc(closeMain);

    return (
        <div
            // style={{display: tools.main ? "inherit" : "none"}}
             className={`alert-message ${type} ${tools.main ? null : "close"}`}>
            {children}
            <div onClick={onClose()}>
                Закрити
            </div>
        </div>
    )
}