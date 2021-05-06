import React from 'react';
import {Layout} from "antd";
import {OneTab} from "../../components/additionalComponents/tabs/OneTab";
import {NavTab} from "../../components/additionalComponents/tabs/NavTab";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const {Content} = Layout;

export const AdminPage:React.FC = () => {

    const user = useSelector((store:RootState) => store.user);

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
                    title: "Всі повідомлення",
                    counter: 0
                }]}>
                <OneTab>
                    1
                </OneTab>
                <OneTab>
                    2
                </OneTab>
                <OneTab>
                    3
                </OneTab>
            </NavTab>
            </div>
        </Content>
    )
}