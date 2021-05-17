import React from 'react';
import {AvatarLink} from "../user-components/AvatarLink";
import {Comment} from "antd";
import './order.styles.scss';

type OrderCardProps = {
    userName: string
    userId: number
    avatar: string
    isFinished: boolean
    bookSendName: string
    bookGetName: string
}

export const OrderCard: React.FC<OrderCardProps> = (
    {
        userId,
        userName,
        avatar,
        isFinished,
        bookGetName,
        bookSendName
    }) => {
    return (
        <div className = {isFinished ? "finished" : "active"}>
        <Comment
            actions={[]}
            author={userName}
            avatar={
                <AvatarLink
                    isMine={false}
                    userId={userId}
                    userAvatar={avatar}
                />
            }
            content={
                <div>
                    <div>Бажає отримати: {bookGetName}</div>
                    <div>Пропонує: {bookSendName}</div>
                </div>
            }
        />
        </div>
    )
}