import React from 'react';
import {Col, Divider, Layout, Row} from "antd";
import {useSelector} from 'react-redux';
import {AddBook} from "./additional/AddBook";
import {RootState} from "../../store/store";
import {loadAllBooks, orderBook} from "../../store/user/userActions";
import {ReadOutlined} from "@ant-design/icons";
import {getUserByID} from "./additional/service";
import {BookCard} from "../../components/additionalComponents/books/BookCard";
import {useWidth} from "../../hooks/useDimension";
import {usePreload} from "../../hooks/usePreload";
import "../../components/mainStyles.scss";
import {useDispatchFunc} from "../../hooks/useDispatchFunction";

const {Content} = Layout;

export const BookPage: React.FC = () => {

    const handleOrderBook = useDispatchFunc(orderBook);
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);

    usePreload(loadAllBooks);

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider
                    orientation="left">
                    Книги
                    <span
                        className="mx-1">
                        <ReadOutlined />
                    </span>
                </Divider>
                {user.credentials && <AddBook/>}
                <Row className ="m-0"
                    gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    {user.allBooks.map((book) =>
                        <Col
                            className="mx-auto m-1"
                            span={width < 700  ?width < 430 ? 21 : 12 : 8}>
                            <BookCard
                                handleOrderBook={handleOrderBook(book.id)}
                                isMine={user.credentials?.id === book.user}
                                photo={book.preview}
                                isLogged={!!user.credentials}
                                avatar={user.credentials?.avatar}
                                owner={book.ownerName}
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