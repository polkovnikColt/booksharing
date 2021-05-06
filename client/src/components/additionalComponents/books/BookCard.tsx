import React from 'react';
import {Skeleton, Card, Tooltip, Button,} from 'antd';
import {CheckCircleOutlined, DownOutlined, UpOutlined} from '@ant-design/icons';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";
import {UserModal} from "../modal/UserModal";
import {cut} from "./additional/service";
import {useVisibility} from "../../../hooks/useVisibility";
import {UserInterface} from "../../../types/types";
import {messageFormData} from "../../../pages/book/additional/service";

const {Meta} = Card;

type BookCardProps = {
    name: string,
    isLogged: boolean,
    isMine: boolean,
    widthInPx?: number,
    isOrdered?: boolean,
    user?: UserInterface,
    photo: string,
    author: string,
    genre: string
    description: string,
    views: number
    handleOrderBook?: () => void
}

export const BookCard: React.FC<BookCardProps> = (
    {
        isOrdered,
        author,
        description,
        isMine,
        photo,
        name,
        widthInPx,
        genre,
        views,
        user,
        isLogged,
        handleOrderBook
    }
) => {

    const {visible, show} = useVisibility(false);

    return (
        <>
            <Card
                style={{maxWidth: widthInPx}}
                className="book-card-size m-0"
            >
                <Skeleton loading={false} avatar active>
                    {!!user && <Meta
                        avatar={
                            <UserModal
                                formData={messageFormData}
                                city={user[0].city}
                                info={user[0].info}
                                phoneNumber={user[0].phoneNumber}
                                dispatchFunc={() => {
                                }}
                                avatar={user[0].avatar}
                                name={user[0].name}
                            />}
                        title={user[0].name}
                    />
                    }
                    <div onClick={isLogged && !isMine ? handleOrderBook : null}>
                        <ImageItem
                            isOrdered={isOrdered}
                            label="Замовлена"
                            widthInPer={100}
                            base64={photo}
                        />
                    </div>
                    <div className="book-description">
                        <h2>{name}</h2>
                        <h3>Автор: {author}</h3>
                        <h3>Жанр: {genre}</h3>
                        <h3>{visible ? description : cut(description)}</h3>
                        <div className="w-100">
                            {visible ?
                                <div className="mx-auto"
                                     onClick={show}>
                                    <UpOutlined/>
                                </div> :
                                <div className="mx-auto"
                                     onClick={show}>
                                    <DownOutlined/>
                                </div>
                            }
                        </div>
                        <h5>Бажаючі отримати: {views}</h5>
                    </div>
                </Skeleton>
            </Card>
        </>
    );

}