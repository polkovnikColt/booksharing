import React from 'react';
import {Checkbox, Space} from "antd";

type CheckboxProps = {
    handler: () => void
    actionName:string
}

export const CheckboxItem:React.FC<CheckboxProps> = ({
    handler,
    actionName
}) => {
    return (
        <Space>
           <Checkbox
               onClick={handler}
           />
           {actionName}
        </Space>

    )
}