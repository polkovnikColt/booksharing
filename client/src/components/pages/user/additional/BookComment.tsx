import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import {UserInfoProps} from "../../../../types/types";

type BookCommentType = {
    props:UserInfoProps,
    remove: (name:string) => void
}

export const BookComment:React.FC<BookCommentType> = ({props,remove}) => {
    const [action, setAction] = useState(null);

    const like = () => {
        setAction('liked');

    };

    const dislike = () => {
        setAction('disliked');
        remove(props.name);
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
      </span>
        </Tooltip>,
    ];

    return (
        <Comment
            style={{backgroundColor:"#ffffff",margin:13}}
            actions={actions}
            author={<a>{props.name}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>
            }
            content={<p>{props.bookName}</p>}
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
};