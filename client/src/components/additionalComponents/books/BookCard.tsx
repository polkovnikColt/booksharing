import React from 'react';
import {Skeleton, Card, Avatar, Tooltip, } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import {UserInterface} from '../../../types/types';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";

const {Meta} = Card;

type BookCardProps = {
    avatar: null,
    isLogged:boolean,
    user: UserInterface,
    name:string,
    photo:string,
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
    photo,
    genre,
    views,
    avatar,
    user,
    isLoading,
    isLogged
}) => {
    return (
        <>
            <Card
                className="book-card-size mx-2"
                actions={[
                    <Tooltip placement="bottom" title={"Хочу отримати!"}>
                        {isLogged && <CheckCircleOutlined/>}
                    </Tooltip>
                ]}>
                <Skeleton loading={isLoading} avatar active>
                    <Meta
                        avatar={ <Avatar src={avatar}/> }
                        title={user.userName}
                    />
                    <ImageItem
                        widthInPer={100}
                        base64={photo}
                    />
                    <div className="book-description">
                    <h2>Назва: {name}</h2>
                    <h3>Автор: {author}</h3>
                    <h3>Жанр: {genre}</h3>
                        <h5>Бажаючі отримати: {views}</h5>
                    </div>
                </Skeleton>
            </Card>
        </>
    );

}