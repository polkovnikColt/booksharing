import React from 'react';
import {FormDataInterface} from "../../../types/types";
import {Avatar,  Modal} from "antd";
import {GeneralForm} from "../forms/GeneralForm";
import {useVisibility} from "../../../hooks/useVisibility";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";

type UserModalProps = {
    name: string
    phoneNumber:string
    info:string
    city:string
    avatar: string
    formData:FormDataInterface[]
    dispatchFunc:any
}

export const UserModal: React.FC<UserModalProps> = (
    {
        name,
        avatar,
        phoneNumber,
        info,
        dispatchFunc,
        formData,
        city
    }
) => {

    const {visible,show} = useVisibility(false);
    const onSubmit = useDispatchFunc(dispatchFunc);
    const {object,changeHandler} = useFormHandler('');

    return (
        <>
            <div
                onClick={show}>
                <Avatar src={avatar}/>
            </div>
            <Modal
                title={name}
                visible={visible}
                onCancel={show}
                footer={[]}
            >
            <h3>Номер телефону: {phoneNumber}</h3>
            <h3>Місто: {city}</h3>
            <h3>Про себе:
                {info}
            </h3>
                <GeneralForm
                    buttonText="Відправити"
                    formData={formData}
                    inputHandler={changeHandler}
                    submitHandler={onSubmit(object)}
                    hasSelector={false}
                    hasCheckbox={false}
                    hasUploader={false}
                    />
            </Modal>
        </>
    )
}