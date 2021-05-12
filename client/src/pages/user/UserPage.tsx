import React from 'react';
import {Divider, Layout} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import {useWidth} from "../../hooks/useDimension";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {RootState} from "../../store/store";
import {deleteFromFavorite, disorderBook, loadBooks} from "../../store/user/userActions";
import {MyBooks} from "./additional/user-component/MyBooks";
import {usePreload} from "../../hooks/usePreload";
import {BooksToManipulate} from "./additional/user-component/BookToManipulate";
import {getBooks} from "./additional/service";

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
                        counter: 0
                    },
                    {
                        title: "Відправлення",
                        counter: 0
                    },
                    {
                        title: "Улюблені",
                        counter: user.credentials.favorite.length
                    },
                    {
                        title: "Мої книги",
                        counter: user.books.length
                    }]}>
                    <OneTab>
                    </OneTab>
                    <OneTab>
                        {/*<BooksToManipulate*/}
                        {/*    type="toSend"*/}
                        {/*    userId={user.credentials?.id}*/}
                        {/*    dispatchFunc={[*/}
                        {/*        () => {},*/}
                        {/*        () => {}*/}
                        {/*        ]}*/}
                        {/*    books={getBooks(user.allBooks, user.credentials.booksToSendId)}*/}
                        {/*    width={width}*/}
                        {/*/>*/}
                    </OneTab>
                    <OneTab>
                        <BooksToManipulate
                            books={getBooks(user.allBooks, user.credentials.favorite)}
                            userId={user.credentials?.id}
                            dispatchFunc={deleteFromFavorite}
                            type="favorite"
                            width={width}
                            />
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