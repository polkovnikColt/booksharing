import React from 'react';
import {Skeleton, Card, Avatar, Tooltip, } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import {UserInterface} from '../../../types/types';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";

const {Meta} = Card;

type BookCardProps = {
    avatar: string,
    isLogged:boolean,
    isMine: boolean,
    widthInPx?:number,
    owner: string,
    name:string,
    photo:string,
    author:string,
    genre:string
    description:string,
    views:number
}

export const BookCard:React.FC<BookCardProps> = ({
    name,
    author,
    description,
    isMine,
    photo,
    widthInPx,
    genre,
    views,
    avatar,
    owner,
    isLogged
}) => {
    return (
        <>
            <Card
                style ={{maxWidth: widthInPx}}
                className="book-card-size m-0"
                actions={[
                    <Tooltip placement="bottom" title={"Хочу отримати!"}>
                        {isLogged && !isMine &&
                             <CheckCircleOutlined/>
                        }
                    </Tooltip>
                ]}>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={ <Avatar src={avatar}/> }
                        title={owner}
                    />
                    <ImageItem
                        widthInPer={100}
                        base64={photo}
                    />
                    <div className="book-description">
                    <h2>{name}</h2>
                    <h3>Автор: {author}</h3>
                    <h3>Жанр: {genre}</h3>
                    <h3>{description}</h3>
                        <h5>Бажаючі отримати: {views}</h5>
                    </div>
                </Skeleton>
            </Card>
        </>
    );

}