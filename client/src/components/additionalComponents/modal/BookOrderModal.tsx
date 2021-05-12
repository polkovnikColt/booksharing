import React from 'react';
import {Col, Modal} from "antd";
import {GeneralForm} from "../forms/GeneralForm";
import {ImageItem} from "../images/ImageItem";
import {useVisibility} from "../../../hooks/useVisibility";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {useStateParams} from "../../../hooks/useStateParams";

type BookOrderModalProps = {
    handleOrder: any
    photo: string
    bookName: string
    userId: number
    isLogged: boolean
    isOrdered: boolean
    isMine:boolean
}

export const BookOrderModal: React.FC<BookOrderModalProps> = (
    {
        bookName,
        photo,
        handleOrder,
        userId,
        isOrdered,
        isLogged,
        isMine
    }) => {

    const {userBooks} = useStateParams(`${userId}`);
    const {show,visible} = useVisibility(false);
    const {changeHandler,object} = useFormHandler({});

    return (
        <Col>
            <div onClick={isLogged && !isOrdered && !isMine ? show : null}>
                <ImageItem
                    label="Зарезервовано"
                    isOrdered={isLogged && isOrdered}
                    base64={photo}
                    widthInPer={100}
                    />
            </div>
            <Modal
                visible={visible}
                footer={[]}
                onCancel={show}
                closable
                title={bookName}
            >
                <GeneralForm
                    buttonText="Запропонувати"
                    formData={[]}
                    selectorName="Мої книги"
                    inputHandler={null}
                    values={userBooks.map(book => book.name)}
                    selectorHandler={changeHandler}
                    submitHandler={null}
                    hasSelector={true}
                    hasCheckbox={false}
                    hasUploader={false}
                />
            </Modal>
        </Col>
    )
}