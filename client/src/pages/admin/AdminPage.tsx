import React from 'react';
import {Layout} from "antd";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {UserCard} from "../../components/additionalComponents/user-components/UserCard";
import {findBookById, messageFormData} from "./additional/service";
import {AllUser} from "./additional/AllUsers";
import {AllBooks} from "./additional/AllBooks";
import {useWidth} from "../../hooks/useDimension";
import {OrderCard} from "../../components/additionalComponents/order/OrderCard";

const {Content} = Layout;

export const AdminPage:React.FC = () => {

    const user = useSelector((store:RootState) => store.user);
    const width = useWidth(window.innerWidth);

    return(
        <Content
            style={{minHeight:window.innerHeight}}>
            <div className="p-3">
            <NavTab
                items={[
                {
                    title: "Всі книги",
                    counter: user.allBooks.length
                },
                {
                    title: "Всі користувачі",
                    counter: user.allUsers.length
                },
                {
                    title: "Всі обміни",
                    counter: user.orders.length
                }]}>
                <OneTab>
                   <AllBooks
                       user={user.credentials}
                       books={user.allBooks}
                       width={width}
                   />
                </OneTab>
                <OneTab>
                    <AllUser allUsers={user.allUsers}/>
                </OneTab>
                <OneTab>
                    {user.orders.map(order => (
                        <OrderCard
                            userName={order.user[0].name}
                            userId={order.user[0].id}
                            avatar={order.user[0].avatar}
                            isFinished={order.isFinished}
                            bookSendName={findBookById(user.allBooks,order.bookSendId)}
                            bookGetName={findBookById(user.allBooks,order.bookGetId)}
                        />
                    ))}
                </OneTab>
            </NavTab>
            </div>
        </Content>
    )
}