import {BookInterface, UserInterface} from "../../../types/types";
import React from "react";
import {Col, Row} from "antd";
import {BookCard} from "../../../components/additionalComponents/books/BookCard";
import {ColumnWrapper} from "../../../components/additionalComponents/wrappers/ColumnWrapper";
import {deleteBook} from "../../../store/user/userActions";
import {ButtonManipulate} from "../../../components/additionalComponents/manipulators/ButtonManipulate";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

type MyBooksProps = {
    books: BookInterface[],
    user: UserInterface,
    width: number
}

export const AllBooks: React.FC<MyBooksProps> = (
    {
        books,
        user,
        width
    }
) => {

    const current = useSelector((store:RootState) => store.user);

    return (
        <>
            {books.map((book: BookInterface) => {
                return (
                    <Row className="mx-1 my-3">
                        <Col span={width < 500 ? 24 : 10}>
                            <BookCard
                                isExchanged={book.isExchanged}
                                canAdd={false}
                                widthInPx={width < 500 ? 400 : 300}
                                isMine={current.credentials.id === book.user[0].id}
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