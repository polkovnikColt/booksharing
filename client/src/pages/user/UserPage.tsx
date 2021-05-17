import React from 'react';
import {Avatar, Divider, Layout, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import {useWidth} from "../../hooks/useDimension";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {RootState} from "../../store/store";
import {approveOrder, deleteFromFavorite, disorderBook, loadAllOrders, loadBooks} from "../../store/user/userActions";
import {MyBooks} from "./additional/user-component/MyBooks";
import {usePreload} from "../../hooks/usePreload";
import {BooksToManipulate} from "./additional/user-component/BookToManipulate";
import {findMyOrders, findOrdersToMe, getBooks} from "./additional/service";
import {AllOrders} from "./additional/user-component/AllOrders";

const {Content} = Layout;

export const UserPage: React.FC = () => {

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);

    usePreload(loadBooks, user.credentials.id)
    usePreload(loadAllOrders)

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
                <div className ="p-3">
                <Avatar src={user.credentials?.avatar}/>
                <h2>Місто:
                    {user.credentials?.city
                        ? user.credentials.city :
                        "Місто не вказане"}
                </h2>
                <h2>Телефон:
                    {user.credentials?.phoneNumber
                        ? user.credentials.phoneNumber :
                        "Телефон не вказано"}
                </h2>
                    <h2>Тeг у соціальних мережах:
                        {user.credentials?.social
                            ? user.credentials.social :
                            "Соціальні мережі не вказано"}
                    </h2>
                <h3>
                    {user.credentials?.info
                        ? user.credentials.info :
                        "Розкажіть по себе"}
                </h3>
                </div>
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
                        <AllOrders
                            dispatchFunctions={[disorderBook]}
                            orders={findMyOrders(user.orders,user.credentials.id)}
                            allBooks={user.allBooks}
                        />
                    </OneTab>
                    <OneTab>
                        <AllOrders
                            dispatchFunctions={[disorderBook,approveOrder]}
                            orders={findOrdersToMe(user.orders,user.credentials.id)}
                            allBooks={user.allBooks}
                        />
                    </OneTab>
                    <OneTab>
                        <BooksToManipulate
                            books={getBooks(user.allBooks, user.credentials.favorite)}
                            userId={user.credentials?.id}
                            dispatchFunc={deleteFromFavorite}
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