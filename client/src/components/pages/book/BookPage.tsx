import React from 'react';
import {Col, Divider, Layout, Row} from "antd";
import {useSelector,useDispatch} from 'react-redux';
import {BookCard} from "./additional/BookCard";
import {AddBook} from "./additional/AddBook";
import {addBook} from "../../../store/user/userActions";
import {a} from './additional/service'

export const BookPage: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector(item => item.book.books);

    const appendBook = (book: {}): void => {
        dispatch(addBook(book));
    }

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Книги</Divider>
                <AddBook/>
                <Row style={{marginLeft: 0, marginRight: 0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    {books.map((item, index) =>
                        <Col style={{margin: "0 auto"}}
                             span={31}>
                            <BookCard props={item} key={index}/>
                        </Col>)}
                </Row>
            </Content>
        </Layout>
    );
}