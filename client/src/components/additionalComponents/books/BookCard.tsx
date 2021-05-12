import React from 'react';
import {Skeleton, Card, Tooltip, Button, Avatar,} from 'antd';
import {StarOutlined} from '@ant-design/icons';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";
import {UserInterface} from "../../../types/types";
import {AvatarLink} from "../user-components/AvatarLink";
import {LabelItem} from "../labels/LabelItem";
import {BookOrderModal} from "../modal/BookOrderModal";

const {Meta} = Card;

type BookCardProps = {
    bookId?: number
    name: string,
    isLogged: boolean,
    isMine: boolean,
    widthInPx?: number,
    isOrdered?: boolean,
    user?: UserInterface | UserInterface[],
    addToFavorite?: any
    photo: string,
    author: string,
    genre: string
    userPage?: boolean
    handleOrderBook?: () => void
}

export const BookCard: React.FC<BookCardProps> = (
    {
        bookId,
        isOrdered,
        author,
        isMine,
        photo,
        name,
        widthInPx,
        genre,
        user,
        isLogged,
        handleOrderBook,
        userPage,
        addToFavorite
    }
) => {
    return (
        <>
            <Card
                style={{maxWidth: widthInPx}}
                className="book-card-size my-3"
            >
                {isMine && user ?
                    <div className="mine"/> :
                    <div
                        onClick={addToFavorite}
                        className="star">
                        <StarOutlined size={100}/>
                    </div>
                }
                <Skeleton loading={false} avatar active>
                    {!!user && <Meta
                        avatar={
                            !user[0] ? null : <AvatarLink
                                isMine={isMine}
                                userId={user[0].id}
                                userAvatar={user[0].avatar}
                            />
                        }
                        title={user[0].name}
                    />
                    }
                    { user === undefined ? <ImageItem
                        isOrdered={isOrdered && isLogged}
                        label="Зарезервовано"
                        widthInPer={100}
                        base64={photo}
                    /> :
                        <BookOrderModal
                        handleOrder={isLogged && !isMine ? handleOrderBook : null}
                        photo={photo}
                        bookName={name}
                        userId={user[0].id}
                        isLogged={isLogged}
                        isOrdered={isOrdered}
                        isMine={isMine}
                        />}
                    <div className="book-description">
                        <h2>{name}</h2>
                        <h3>Автор: {author}</h3>
                        <h3>Жанр: {genre}</h3>

                        {!userPage && <LabelItem
                            className="link-more"
                            isLink={true}
                            path={`book/current/${bookId}`}
                        >
                            Докладніше
                        </LabelItem>}
                    </div>
                </Skeleton>
            </Card>
        </>
    );

}