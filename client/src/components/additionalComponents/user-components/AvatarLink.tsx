import React from 'react';
import {Link} from "react-router-dom";
import {Avatar} from "antd";

type AvatarLinkProps = {
    isMine:boolean
    userId:number
    userAvatar:string
}

export const AvatarLink:React.FC<AvatarLinkProps> = (
    {
        userId,
        isMine,
        userAvatar
    }) => {
    return (
        <Link to ={isMine ?
            '/cabinet' :
            `user/current/${userId}`}>
            <Avatar src={userAvatar}/>
        </Link>
    )
}