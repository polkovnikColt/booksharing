import React from 'react';
import {Divider, Layout} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {BookComment} from "../../components/additionalComponents/books/BookComment";
import {useSelector} from 'react-redux';
import {useWidth} from "../../hooks/useDimension";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {RootState} from "../../store/store";
import {disorderBook, loadBooks, updateUser} from "../../store/user/userActions";
import {MyBooks} from "./additional/user-component/MyBooks";
import {usePreload} from "../../hooks/usePreload";
import {BooksToManipulate} from "./additional/user-component/BookToManipulate";
import {getBooks} from "./additional/service";
import {Accordion} from "../../components/additionalComponents/accordion/Accordion";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";

const {Content} = Layout;

export const UserPage: React.FC = () => {

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);

    usePreload(loadBooks, user.credentials.id)

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight}}>
                <Divider
                    orientation="left">
                    Користувач
                    <span className="mx-1">
                        <UserOutlined/>
                    </span>
                </Divider>
                <NavTab items={[
                    {
                        title: "Отримання",
                        counter: user.credentials.booksToGetId.length
                    },
                    {
                        title: "Відправлення",
                        counter: user.credentials.booksToSendId.length
                    },
                    {
                        title: "Повідомлення",
                        counter: 0
                    },
                    {
                        title: "Мої книги",
                        counter: user.books.length
                    }]}>
                    <OneTab>
                        <BooksToManipulate
                            type="toGet"
                            userId={user.credentials?.id}
                            dispatchFunc={disorderBook}
                            books={getBooks(user.allBooks, user.credentials.booksToGetId)}
                            width={width}
                        />
                    </OneTab>
                    <OneTab>
                        <BooksToManipulate
                            type="toSend"
                            userId={user.credentials?.id}
                            dispatchFunc={[
                                () => {},
                                () => {}
                                ]}
                            books={getBooks(user.allBooks, user.credentials.booksToSendId)}
                            width={width}
                        />
                    </OneTab>
                    <OneTab>
                    </OneTab>
                    <OneTab>
                        <MyBooks
                            books={user.books}
                            user={user.credentials}
                            width={width}
                        />
                    </OneTab>
                </NavTab>
            </Content>
        </Layout>
    );
}