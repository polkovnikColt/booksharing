import React, {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import {UserInfoProps} from "../../../../types/types";

type BookCommentType = {
    props: UserInfoProps,
    remove?: (name: string) => void,
    approve?:(name:string,user) => void,
    user?:{}
}

export const BookComment: React.FC<BookCommentType> =
    ({props,
         remove,
         approve,
         user}) => {
    const [action, setAction] = useState(null);

    const like = () => {
        setAction('liked');
        approve(props.name,user);

    };

    const dislike = () => {
        setAction('disliked');
        remove(props.name);
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Прийняти запрошення">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Відхилити запрошення">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
      </span>
        </Tooltip>,
    ];

    return (
        <Comment
            style={{backgroundColor: "#ffffff", margin: 13}}
            actions={remove || approve ? actions : null}
            author={<a>{props.name}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>
            }
            content={
                <>
                    <p>{props.bookName}</p>
                    <p>{props.profileInfo.city}</p>
                    <p>{props.profileInfo.toBeReturn ? `Згоден повернути ${props.profileInfo.date}`
                        : `Прошу без повернення` }</p>
                </>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
};