import React from 'react';
import {BookInterface, OrderBookInterface} from "../../../../types/types";
import {Col, Row} from "antd";
import {BookCard} from "../../../../components/additionalComponents/books/BookCard";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";
import {UserCard} from "../../../../components/additionalComponents/user-components/UserCard";
import {messageFormData} from "../service";

type BooksToGetProps = {
    books: BookInterface[],
    userId: number,
    dispatchFunc: any[2] | any,
    type: 'toGet' | 'toSend',
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
                                {type === 'toGet' ?
                                    <>
                                        <BookCard
                                            widthInPx={300}
                                            isMine={true}
                                            isLogged={true}
                                            user={book.user}
                                            name={book.name}
                                            photo={book.preview}
                                            author={book.author}
                                            genre={book.genre}
                                            description={book.description}
                                            views={book.views}
                                        />
                                    <ButtonManipulate
                                        dispatchFunction={dispatchFunc}
                                        object={{
                                            userId: userId,
                                            bookId: book.id,
                                            userGetId: book.user[0].id
                                        }}
                                        type="delete"
                                        text="Відмінити"
                                    />
                                    </>
                                    :
                                    <>
                                        <UserCard
                                            bookPreview={book.preview}
                                            name={book.user[0].name}
                                            avatar={book.user[0].avatar}
                                            bookName={book.name}
                                            phoneNumber={book.user[0].phoneNumber}
                                            city={book.user[0].city}
                                            info={book.user[0].info}
                                            formData={messageFormData}
                                            />
                                    <Row>
                                        <ButtonManipulate
                                            dispatchFunction={dispatchFunc[0]}
                                            object={{
                                                userId: userId,
                                                bookId: book.id,
                                                userGetId: book.user[0].id
                                            }}
                                            type="update"
                                            text="Прийняти"
                                        />
                                        <ButtonManipulate
                                            dispatchFunction={dispatchFunc[1]}
                                            object={{
                                                userId: userId,
                                                bookId: book.id,
                                                userGetId: book.user[0].id
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