import React from 'react';
import {BookInterface, UserInterface} from "../../../../types/types";
import {Col, Row} from "antd";
import {BookCard} from "../../../../components/additionalComponents/books/BookCard";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";
import {deleteBook, updateBook} from "../../../../store/user/userActions";
import {formData} from "../service";
import {ModalUpdate} from "../../../../components/additionalComponents/modal/ModalUpdate";
import {ColumnWrapper} from "../../../../components/additionalComponents/wrappers/ColumnWrapper";
import {GeneralForm} from "../../../../components/additionalComponents/forms/GeneralForm";
import {LocalForm} from "./LocalForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";

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
                                bookId={book.id}
                                widthInPx={width < 500 ? 400 : 300}
                                isMine={false}
                                isLogged={!!user[0]}
                                name={book.name}
                                photo={book.preview}
                                author={book.author}
                                genre={book.genre}
                            />
                        </Col>
                        <Col
                            span={width < 500 ? 24 : 14}>
                            <ColumnWrapper>
                                {width < 500 ? <ModalUpdate
                                        photoName="preview"
                                        buttonText="Оновити"
                                        book={book}
                                        title="Оновити книгу"
                                        formData={formData}
                                        dispatchFunction={updateBook}
                                    /> :
                                    <LocalForm
                                        book={book}
                                        formData={formData}
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