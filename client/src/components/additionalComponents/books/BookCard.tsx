import React from 'react';
import {Skeleton, Card, Avatar, Tooltip, Button,} from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';
import {UserInterface} from '../../../types/types';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";
import {UserModal} from "../modal/UserModal";

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
    handleOrderBook?: () => void
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
    isLogged,
    handleOrderBook
}) => {
    return (
        <>
            <Card
                style ={{maxWidth: widthInPx}}
                className="book-card-size m-0"
                actions={[
                    <Tooltip placement="bottom" title={"Хочу отримати!"}>
                        {isLogged && !isMine &&
                            <Button onClick={handleOrderBook}>
                                Запросити
                                <CheckCircleOutlined/>
                            </Button>
                        }
                    </Tooltip>
                ]}>
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <UserModal
                            avatar={avatar}
                            name={owner}
                        />}
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