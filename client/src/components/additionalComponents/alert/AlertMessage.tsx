import React from 'react';
import {Alert, Button, Space} from 'antd';
import './alert.styles.scss';

type AlertProps = {
    type:"success" | "info" | "warning" | "error",
    message:string
}

export const MessageAlert:React.FC<AlertProps> = ({type,message}) => (
    <Alert
        className="alert-message"
        message={message}
        type={type}
        showIcon
        action={
            <Button size="small" type="text">
                UNDO
            </Button>
        }
        closable
    />)