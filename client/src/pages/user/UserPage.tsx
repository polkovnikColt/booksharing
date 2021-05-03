import React, {ChangeEvent, useEffect, useState} from 'react';
import {Divider, Layout} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {BookComment} from "../../components/additionalComponents/books/BookComment";
import {useDispatch, useSelector} from 'react-redux';
import {useWidth} from "../../hooks/useDimension";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {RootState} from "../../store/store";
import {loadBooks, updateUser} from "../../store/user/userActions";
import {MyBooks} from "./additional/user-component/MyBooks";
import {usePreload} from "../../hooks/usePreload";

const {Content} = Layout;

export const UserPage: React.FC = () => {

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);

    usePreload(loadBooks,user.credentials.id)

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
                    {title: "Отримання", counter: 0},
                    {title: "Відправлення", counter: 0},
                    {title: "Повідомлення", counter: 0},
                    {title: "Мої книги", counter: user.books.length}]}>
                    <OneTab>
                        <div>123</div>
                    </OneTab>
                    <OneTab>
                        <div>sadgasdf</div>
                    </OneTab>
                    <OneTab>
                        <div>q232twfasdf</div>
                    </OneTab>
                    <OneTab>
                        <MyBooks
                            books={user.books}
                            user={user.credentials}
                            width={width}/>
                    </OneTab>
                </NavTab>
            </Content>
        </Layout>
    );
}