import React from 'react';
import {Col, Divider, Layout, Row} from "antd";
import {useSelector} from 'react-redux';
import {BookCard} from "./additional/BookCard";
import {AddBook} from "./additional/AddBook";

// let mockCards: CardProps[] = [
//     {title: "Title 1", body: "Body 1"},
//     {title: "Title 2", body: "Body 2"},
//     {title: "Title 3", body: "Body 3"},
//     {title: "Title 4", body: "Body 4"},
// ];

export const BookPage:React.FC = () => {

    const books = useSelector(item => item.book.books);

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Книги</Divider>
                <AddBook/>
                <Row style ={{marginLeft:0,marginRight:0}}
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