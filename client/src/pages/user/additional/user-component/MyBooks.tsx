import React from 'react';
import {BookInterface, UserInterface} from "../../../../types/types";
import {Col, Row} from "antd";
import {BookCard} from "../../../../components/additionalComponents/books/BookCard";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";
import {deleteBook, updateBook} from "../../../../store/user/userActions";
import {formData} from "../service";
import {ModalUpdate} from "../../../../components/additionalComponents/modal/ModalUpdate";

type MyBooksProps = {
    books: BookInterface[],
    user: UserInterface,
    width: number
}

export const MyBooks:React.FC<MyBooksProps> = (
    {
        books,
        user,
        width
    }
) => {

    return(
       <>
            {books.map((book: BookInterface) => {
                return (
                    <Col
                        className="mx-auto my-3"
                        span={24}>
                        <Row>
                        <BookCard
                            widthInPx={width < 500 ? 300 : 350}
                            isMine={true}
                            avatar={user.avatar}
                            isLogged={!!user}
                            owner={book.ownerName}
                            name={book.name}
                            photo={book.preview}
                            author={book.author}
                            genre={book.genre}
                            description={book.description}
                            views={book.views}
                        />
                        <Row>
                           <ModalUpdate
                               buttonText="Оновити"
                               book={book}
                               title="Оновити книгу"
                               formData={formData}
                               dispatchFunction={updateBook}
                           />
                        <ButtonManipulate
                            dispatchFunction={deleteBook}
                            object={book}
                            type="delete"
                            text="Видалити"/>
                        </Row>
                        </Row>
                    </Col>
                )
            })}
       </>
    )
}