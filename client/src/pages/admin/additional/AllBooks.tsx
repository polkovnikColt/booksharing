import {BookInterface, UserInterface} from "../../../types/types";
import React from "react";
import {Col, Row} from "antd";
import {BookCard} from "../../../components/additionalComponents/books/BookCard";
import {ColumnWrapper} from "../../../components/additionalComponents/wrappers/ColumnWrapper";
import {ModalUpdate} from "../../../components/additionalComponents/modal/ModalUpdate";
import {formData} from "../../user/additional/service";
import {deleteBook, updateBook} from "../../../store/user/userActions";
import {GeneralForm} from "../../../components/additionalComponents/forms/GeneralForm";
import {ButtonManipulate} from "../../../components/additionalComponents/manipulators/ButtonManipulate";

type MyBooksProps = {
    books: BookInterface[],
    user: UserInterface,
    width: number
}

export const MyBooks: React.FC<MyBooksProps> = (
    {
        books,
        user,
        width
    }
) => {

    return (
        <>
            {books.map((book: BookInterface) => {
                return (
                    <Row className="mx-1 my-3">
                        <Col span={width < 500 ? 24 : 10}>
                            <BookCard
                                widthInPx={width < 500 ? 400 : 300}
                                isMine={true}
                                isLogged={!!user}
                                user={book.user}
                                name={book.name}
                                photo={book.preview}
                                author={book.author}
                                genre={book.genre}
                            />
                        </Col>
                        <Col
                            span={width < 500 ? 24 : 14}>
                            <ColumnWrapper>
                                {width < 500 ?
                                    <ModalUpdate
                                        photoName="preview"
                                        buttonText="Оновити"
                                        book={book}
                                        title="Оновити книгу"
                                        formData={formData}
                                        dispatchFunction={updateBook}
                                    /> :
                                    <GeneralForm
                                        buttonText="Оновити"
                                        formData={formData}
                                        inputHandler={null}
                                        submitHandler={null}
                                        uploaderHandler={null}
                                        hasSelector={false}
                                        hasCheckbox={false}
                                        hasUploader={true}
                                    />
                                }
                                <ButtonManipulate
                                    dispatchFunction={deleteBook}
                                    object={book}
                                    type="delete"
                                    text="Видалити"/>
                            </ColumnWrapper>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}