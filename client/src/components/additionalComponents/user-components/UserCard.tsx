import React from 'react';
import {Skeleton, Card} from 'antd';
import {UserModal} from "../modal/UserModal";
import {FormDataInterface} from "../../../types/types";
import {ImageItem} from "../images/ImageItem";

type UserCardProps = {
    name: string,
    avatar: string
    bookName: string
    phoneNumber: string,
    bookPreview?: string,
    city: string
    info: string
    formData: FormDataInterface[]

}

const {Meta} = Card;

export const UserCard: React.FC<UserCardProps> = (
    {
        avatar,
        name,
        bookName,
        phoneNumber,
        bookPreview,
        city,
        info,
        formData
    }
) => {

    return (
        <>
            <Card
                className="mx-auto"
                style={{width: 400, marginTop: 16}}
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     <EllipsisOutlined key="ellipsis" />,
                // ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <UserModal
                                dispatchFunc={null}
                                phoneNumber={phoneNumber}
                                info={info}
                                city={city}
                                formData={formData}
                                name={name}
                                avatar={avatar}

                            />
                        }
                        title={name}
                    />
                    <ImageItem
                        base64={bookPreview}
                        widthInPer={100}
                    />
                    <h2>
                        <div className="mx-1">
                            {bookName}
                        </div>
                    </h2>
                    <h3>Користувач проживає у:
                        <div className="mx-1">
                            {city ? city : "Місто не вказане"}
                        </div>
                    </h3>
                </Skeleton>
            </Card>
        </>
    );
}