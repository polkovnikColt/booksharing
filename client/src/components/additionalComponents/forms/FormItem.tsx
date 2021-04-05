import React, {Component, ForwardRefExoticComponent} from 'react';
import {Form} from "antd";
import {Moment} from 'moment';
import './form.styles.scss';


type FormItemProps = {
    name:string,
    label:string,
    message: string,
    InputComponent: typeof Component | ForwardRefExoticComponent<any>
    changeHandler: (name: string, value: string) => void;
}

export const FormItem: React.FC<FormItemProps> =
    ({name,label,message,InputComponent, changeHandler,}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        changeHandler(name, e.target.value);
    }

    const handleMoment = (value: Moment | null, dateString: string): void => {
        changeHandler(name, dateString);
    }

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{required: true, message: message}]}
        >
            <InputComponent
                onChange={name === 'birthday'
                    ? handleMoment
                    : handleChange}
            />
        </Form.Item>)
}