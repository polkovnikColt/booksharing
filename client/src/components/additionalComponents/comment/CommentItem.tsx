import React from 'react';
import {AvatarLink} from "../user-components/AvatarLink";
import {Comment, Tooltip} from "antd";
import moment from 'moment';

type CommentItemProps = {
    avatar: string
    userName: string
    userId: number
    text: string
}

export const CommentItem: React.FC<CommentItemProps> = (
    {
        userId,
        avatar,
        text,
        userName
    }) => {
    return (
        <div><Comment
            actions={[]}
            author={{userName}}
            avatar={
                <AvatarLink
                    isMine={false}
                    userId={userId}
                    userAvatar={avatar}
                />
            }
            content={
                <p>
                    {text}
                </p>
            }
        />
        </div>
    )
}