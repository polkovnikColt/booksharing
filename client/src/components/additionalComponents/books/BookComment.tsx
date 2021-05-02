import React, {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import {UserInterface} from "../../../types/types";

type BookCommentType = {

    remove?: (name: string) => void,
    approve?:(name:string,user) => void,
    user?:UserInterface
}

export const BookComment: React.FC<BookCommentType> = ({
         remove,
         approve,
         user
}) => {

    const [action, setAction] = useState(null);

    const like = () => {
        setAction('liked');
    };

    const dislike = () => {
        setAction('disliked');
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
            author={<a>{}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>
            }
            content={
                <>
                    <p>{}</p>
                    <p>{}</p>
                    <p>{}</p>
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