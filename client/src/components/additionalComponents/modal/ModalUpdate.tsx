import React, {ChangeEvent, useState} from 'react';
import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";
import {BookInterface, FormDataInterface} from "../../../types/types";
import {GeneralForm} from "../forms/GeneralForm";

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
    const [bookChange,seTBookChange] = useState(book);

    const changeHandler = (name:string,value:string) => {
        seTBookChange({...book, [name]: value});
    }

    const uploadHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            seTBookChange({...book, ['preview']: fr.result.toString()});
        }
        fr.readAsDataURL(file);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch(dispatchFunction(bookChange));
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {buttonText}
            </Button>
            <Modal
                title={title}
                visible={isModalVisible}
                onCancel = {handleOk}
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