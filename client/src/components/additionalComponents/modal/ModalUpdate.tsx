import React, { useState} from 'react';
import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";
import {BookInterface, FormDataInterface} from "../../../types/types";
import {GeneralForm} from "../forms/GeneralForm";
import {useFormHandler} from "../../../hooks/useFormHandler";
import './modal.styles.scss'

type ModalItemProps = {
    buttonText: string,
    title:string,
    book:BookInterface,
    formData: FormDataInterface[],
    dispatchFunction

}

export const ModalUpdate: React.FC<ModalItemProps> = (
    {
        buttonText,
        dispatchFunction,
        book,
        formData,
        title
    }
) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {object,changeHandler, uploadHandler} = useFormHandler(book,'preview');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch(dispatchFunction(object));
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} ghost>
                {buttonText}
            </Button>
            <Modal
                title={title}
                visible={isModalVisible}
                onCancel = {handleOk}
                footer={[]}
            >
                <GeneralForm
                    buttonText={buttonText}
                    formData={formData}
                    inputHandler={changeHandler}
                    submitHandler={handleOk}
                    uploaderHandler={uploadHandler}
                    hasSelector={false}
                    hasCheckbox={false}
                    hasUploader={true}
                    />
            </Modal>
        </>
    );
}