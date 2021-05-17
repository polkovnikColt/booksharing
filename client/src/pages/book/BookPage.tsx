import React from 'react';
import {Col, Divider, Layout, Row} from "antd";
import {useSelector} from 'react-redux';
import {AddBook} from "./additional/AddBook";
import {RootState} from "../../store/store";
import {addToFavorite, loadAllBooks, orderBook} from "../../store/user/userActions";
import {ReadOutlined} from "@ant-design/icons";
import {getUserByID, rules} from "./additional/service";
import {BookCard} from "../../components/additionalComponents/books/BookCard";
import {useWidth} from "../../hooks/useDimension";
import {usePreload} from "../../hooks/usePreload";
import "../../components/mainStyles.scss";
import {useDispatchFunc} from "../../hooks/useDispatchFunction";
import {AlertMessage} from "../../components/additionalComponents/alert/AlertMessage";
import {Rules} from "../../components/additionalComponents/labels/Rules";

const {Content} = Layout;

export const BookPage: React.FC = () => {

    const handleAddToFavorite = useDispatchFunc(addToFavorite);
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);

    usePreload(loadAllBooks)

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider
                    orientation="left">
                    Книги
                    <span
                        className="mx-1">
                        <ReadOutlined/>
                    </span>
                </Divider>
                {!!user.credentials && <AlertMessage type="info">
                    <Rules
                        rules={rules}
                        header="Підказка #2"
                    />
                </AlertMessage>}
                {user.credentials && <AddBook/>}
                <Row className="m-0"
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    {user.allBooks.map((book) => {
                        return !book.isExchanged ? (<Col
                            className="mx-auto m-1"
                            span={width < 700 ? width < 430 ? 21 : 12 : 8}>
                            <BookCard
                                canAdd={true}
                                addToFavorite={handleAddToFavorite({
                                    bookId: book.id,
                                    userId: user.credentials?.id
                                })}
                                bookId={book.id}
                                isOrdered={book.isOrdered}
                                isMine={user.credentials?.id === book.user[0].id}
                                photo={book.preview}
                                isLogged={!!user.credentials}
                                user={book.user}
                                name={book.name}
                                author={book.author}
                                genre={book.genre}
                            />
                        </Col>) : null
                    })}
                </Row>
            </Content>
        </Layout>
    );
}