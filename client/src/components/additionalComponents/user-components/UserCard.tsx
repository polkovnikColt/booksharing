import React from 'react';
import {Skeleton, Card, Avatar, Row, Space} from 'antd';
import {FormDataInterface} from "../../../types/types";
import {GeneralForm} from "../forms/GeneralForm";
import {useFormHandler} from "../../../hooks/useFormHandler";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";
import './user.styles.scss';
import {AvatarLink} from "./AvatarLink";
import {useWidth} from "../../../hooks/useDimension";

type UserCardProps = {
    userId:number
    name: string,
    avatar: string
    bookName?: string
    phoneNumber: string,
    bookPreview?: string,
    city: string
    info: string

}

const {Meta} = Card;

export const UserCard: React.FC<UserCardProps> = (
    {
        userId,
        avatar,
        name,
        bookName,
        phoneNumber,
        city,
        info,
    }
) => {

    const width = useWidth(window.innerWidth);

    return (
        <>
            <Card
                className="mx-auto"
                style={{width:"100%", marginTop: 16}}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <AvatarLink
                                isMine={false}
                                userId={userId}
                                userAvatar={avatar}
                                />
                        }
                        title={name}
                    />
                    <Row>
                        <h3 className="flex-start">
                            {bookName && <div>Хоче отримати: {bookName}</div>}
                            <div>Телефон: {phoneNumber}</div>
                            <div>Місто: {city ? city : "Місто не вказане"}</div>
                        </h3>
                    </Row>
                </Skeleton>
            </Card>
        </>
    );
}