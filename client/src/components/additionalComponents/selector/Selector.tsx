import React from 'react';
import {Select} from "antd";
import {SelectValue} from "antd/es/select";
import {Key} from "antd/es/table/interface";
import './selector.styles.scss';

type SelectProps = {
    message?: string,
    name: string,
    values: Key[],
    changeHandler: (name: string, value: string) => void;
}

export const Selector: React.FC<SelectProps> = (
    {
        message,
        values,
        name,
        changeHandler
    }) => {

    const handleChange = (e: SelectValue): void => {
        changeHandler(name, e.toString());
    }

    return (
        <div
            className="w-100">
            {message &&
            <span style={{margin: '10'}}>
                {message}
            </span>}
            <Select
                className="mx-auto selector"
                onChange={handleChange}
                defaultValue="none"
            >
                {values.map((item, i) =>
                    <Select.Option value={item}>{item}</Select.Option>
                )}
            </Select>
        </div>
    )
}