import React from 'react';
import {BookInterface, OrderBookInterface} from "../../../../types/types";
import {Col, Row} from "antd";
import {BookCard} from "../../../../components/additionalComponents/books/BookCard";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";
import {UserCard} from "../../../../components/additionalComponents/user-components/UserCard";

type BooksToGetProps = {
    books: BookInterface[],
    userId: number,
    dispatchFunc: any[2] | any,
    type: 'favorite' | 'toSend',
    width: number
}

export const BooksToManipulate: React.FC<BooksToGetProps> = (
    {
        books,
        dispatchFunc,
        type,
        userId,
        width,
    }
) => {
    return (
        <>
            {books.map((book: BookInterface) => {
                return (
                    <Row className ="mx-1 my-3">
                        <Col span = {24}>
                                {type === 'favorite' ?
                                    <>
                                        <BookCard
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
                                    :
                                    <>
                                        <UserCard
                                            userId={book.user[0].id}
                                            bookPreview={book.preview}
                                            name={book.user[0].name}
                                            avatar={book.user[0].avatar}
                                            bookName={book.name}
                                            phoneNumber={book.user[0].phoneNumber}
                                            city={book.user[0].city}
                                            info={book.user[0].info}
                                            />
                                    <Row>
                                        <ButtonManipulate
                                            dispatchFunction={dispatchFunc[0]}
                                            object={{
                                                userId: userId,
                                                bookId: book.id,
                                            }}
                                            type="update"
                                            text="Прийняти"
                                        />
                                        <ButtonManipulate
                                            dispatchFunction={dispatchFunc[1]}
                                            object={{
                                                userId: userId,
                                                bookId: book.id,
                                            }}
                                            type="delete"
                                            text="Відхилити"/>
                                    </Row>
                                    </>
                                }
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}