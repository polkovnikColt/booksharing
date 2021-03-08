import React, {useState} from 'react';
import {Skeleton, Switch, Card, Avatar} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {CardProps} from '../../types/types';
import {useHttp} from "../../hooks/useHttp";

const {Meta} = Card;

type BookCardProps = {
    props: CardProps
}

export const BookCard:React.FC<BookCardProps> = ({props}) => {

    // const [loading,response] = useHttp();

    let loading = true;

    return (
        <>
            <Card
                style={{width: 280, marginTop: 16}}
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src={props.avatar ||
                            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}/>
                        }
                        title={props.title}
                        description={props.body}
                    />
                </Skeleton>
            </Card>
        </>
    );

}