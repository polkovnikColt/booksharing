import React from 'react';
import {Skeleton, Switch, Card, Avatar, Tooltip} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {CardInterface} from '../../../../types/types';
import {useHttp} from "../../../../hooks/useHttp";

const {Meta} = Card;

type BookCardProps = {
    props: CardInterface
}

export const BookCard:React.FC<BookCardProps> = ({props}) => {

    // const [loading,response] = useHttp();

    let loading = false;

    return (
        <>
            <Card
                style={{width: 300, marginTop: 16}}
                actions={[
                    <Tooltip placement="top" title={"text"}>
                        <SettingOutlined key="setting"/>,
                    </Tooltip>,
                    <Tooltip placement="top" title={"text"}>
                        <EditOutlined key="edit"/>,
                    </Tooltip>,
                    <Tooltip placement="top" title={"text"}>
                        <EllipsisOutlined key="ellipsis"/>,
                    </Tooltip>,
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