import React, {useEffect} from 'react';
import {Col, Divider, Layout, Row} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import {AddBook} from "./additional/AddBook";
import {RootState} from "../../../store/store";
import {loadAllBooks} from "../../../store/user/userActions";
import {getUserByID, mockBooks} from "./additional/service";
import {BookCard} from "../../additionalComponents/books/BookCard";

const {Content} = Layout;

export const BookPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    useEffect(() => {
        dispatch(loadAllBooks(mockBooks));
    }, [])

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Книги</Divider>
                {user.credentials && <AddBook/>}
                <Row style={{marginLeft: 0, marginRight: 0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    {user.allBooks.map((book) =>
                        <Col
                            className="mx-auto my-3"
                            span={7}>
                            <BookCard
                                isLoading={false}
                                avatar={null}
                                user={getUserByID(book.user, user.allUsers)}
                                name={book.name}
                                author={book.author}
                                genre={book.genre}
                                description={book.description}
                                views={book.views}
                            />
                        </Col>
                    )}
                </Row>
            </Content>
        </Layout>
    );
}