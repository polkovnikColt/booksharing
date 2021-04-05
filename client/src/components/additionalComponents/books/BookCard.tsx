import React from 'react';
import {Skeleton, Switch, Card, Avatar, Tooltip, Space} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {CardInterface, UserInterface} from '../../../types/types';
import './books.styles.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const {Meta} = Card;

type BookCardProps = {
    avatar: null,
    user:UserInterface,
    name:string,
    author:string,
    genre:string
    description:string,
    views:number
    isLoading:boolean
}

export const BookCard:React.FC<BookCardProps> = ({
    name,
    author,
    description,
    genre,
    views,
    avatar,
    user,
    isLoading
}) => {
    console.log(user)
    return (
        <>
            <Card
                className="book-card-size"
                actions={[
                    <Tooltip placement="top" title={"text"}>
                        <SettingOutlined key="setting"/>,
                    </Tooltip>,
                    <Tooltip placement="top" title={"text"}>
                        <EditOutlined key="edit"/>,
                    </Tooltip>,
                    <Tooltip placement="top" title={"text"}>
                        <EllipsisOutlined key="ellipsis"/>,
                    </Tooltip>,
                ]}
            >
                :<Skeleton loading={isLoading} avatar active>
                    <Meta
                        avatar={avatar ? <Avatar src={avatar}/> : null}
                        title={user.email}
                    />
                {}
                </Skeleton>
            </Card>
        </>
    );

}