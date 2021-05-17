import React from 'react';
import {BookInterface} from "../../../../types/types";
import {Col, Row} from "antd";
import {BookCard} from "../../../../components/additionalComponents/books/BookCard";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";

type BooksToGetProps = {
    books: BookInterface[],
    userId: number,
    dispatchFunc: any,
    width: number
}

export const BooksToManipulate: React.FC<BooksToGetProps> = (
    {
        books,
        dispatchFunc,
        userId,
        width,
    }
) => {
    return (
        <>
            {books.map((book: BookInterface) => {
                return !book.isExchanged ? (
                    <Row className ="mx-1 my-3">
                        <Col span = {24}>
                                    <>
                                        <BookCard
                                            canAdd={false}
                                            bookId={book.id}
                                            widthInPx={300}
                                            isMine={false}
                                            isLogged={true}
                                            user={book.user}
                                            name={book.name}
                                            photo={book.preview}
                                            author={book.author}
                                            genre={book.genre}
                                        />
                                    <ButtonManipulate
                                        dispatchFunction={dispatchFunc}
                                        object={{
                                            userId: userId,
                                            bookId: book.id,
                                        }}
                                        type="delete"
                                        text="Прибрати"
                                    />
                                    </>
                        </Col>
                    </Row>
                ) : null
            })}
        </>
    )
}