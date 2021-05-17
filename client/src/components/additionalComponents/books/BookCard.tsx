import React from 'react';
import {Skeleton, Card, Tooltip, Button, Avatar,} from 'antd';
import {StarOutlined} from '@ant-design/icons';
import './books.styles.scss';
import {ImageItem} from "../images/ImageItem";
import {UserInterface} from "../../../types/types";
import {AvatarLink} from "../user-components/AvatarLink";
import {LabelItem} from "../labels/LabelItem";
import {BookOrderModal} from "../modal/BookOrderModal";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addToPreference, orderBook} from "../../../store/user/userActions";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";

const {Meta} = Card;

type BookCardProps = {
    bookId?: number
    canAdd: boolean
    name: string,
    isLogged: boolean,
    isMine: boolean,
    widthInPx?: number,
    isExchanged?:boolean,
    isOrdered?: boolean,
    user?: UserInterface,
    addToFavorite?: any
    photo: string,
    author: string,
    genre: string
    userPage?: boolean
}

export const BookCard: React.FC<BookCardProps> = (
    {
        isExchanged,
        canAdd,
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
        userPage,
        addToFavorite
    }
) => {

    const currentUser = useSelector((store: RootState) => store.user);
    const addPref = useDispatchFunc(addToPreference);

    const onAdd = () => {
        addToFavorite();
        addPref({
            genre:genre,
            author:author,
            user: currentUser.credentials.id
        })();
    }

    return (
        <>
            <Card
                style={{maxWidth: widthInPx}}
                className="book-card-size my-3"
            >
                {isMine && user ?
                    <div className="mine"/> :
                    null
                }
                {canAdd && !isMine ?
                    <div
                        onClick={onAdd}
                        className="star">
                        <StarOutlined size={100}/>
                    </div>
                    : null
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
                    {!user || isExchanged || isMine  ? <ImageItem
                            isOrdered={isOrdered && isLogged}
                            label={isExchanged ? "Обміняна" :"Зарезервовано"}
                            widthInPer={100}
                            base64={photo}
                        /> :
                        <BookOrderModal
                            bookUser={user[0].id}
                            bookId={bookId}
                            handleOrder={isLogged && !isMine ? orderBook : null}
                            photo={photo}
                            bookName={name}
                            userId={currentUser.credentials?.id}
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