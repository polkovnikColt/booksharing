import React from 'react';
import {Col, Modal} from "antd";
import {GeneralForm} from "../forms/GeneralForm";
import {ImageItem} from "../images/ImageItem";
import {useVisibility} from "../../../hooks/useVisibility";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {useStateParams} from "../../../hooks/useStateParams";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";
import {getBookIdByName} from "./service";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

type BookOrderModalProps = {
    bookUser:number
    handleOrder: any
    photo: string
    bookName: string
    bookId: number
    userId: number
    isLogged: boolean
    isOrdered: boolean
    isMine:boolean
}

export const BookOrderModal: React.FC<BookOrderModalProps> = (
    {
        bookUser,
        bookName,
        photo,
        handleOrder,
        userId,
        isOrdered,
        isLogged,
        isMine,
        bookId
    }) => {

    const {userBooks} = useStateParams(`${userId}`);
    const user = useSelector((store:RootState) => store.user);
    const submitHandler = useDispatchFunc(handleOrder);
    const {show,visible} = useVisibility(false);
    const {changeHandler,object} = useFormHandler('');

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
                    selectorName="name"
                    inputHandler={null}
                    values={userBooks
                        .filter(book => book.isOrdered === false)
                        .map(book => book.name)}
                    selectorHandler={changeHandler}
                    submitHandler={isLogged ? submitHandler({
                        to: bookUser,
                        bookSendId: object ? getBookIdByName(userBooks, object) : 0,
                        bookGetId: bookId,
                        user: [user.credentials]
                    }) : null}
                    hasSelector={true}
                    hasCheckbox={false}
                    hasUploader={false}
                />
            </Modal>
        </Col>
    )
}