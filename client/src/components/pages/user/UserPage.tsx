import React from 'react';
import {Badge, Col, Divider, Layout, Row, Space} from "antd";
import {BookComment} from "../../additionalComponents/books/BookComment";
import {useDispatch, useSelector} from 'react-redux';
import {a} from './additional/service';
import '../../mainStyles.scss';
import {useWidth} from "../../../hooks/useDimension";

export const UserPage: React.FC = () => {
    const dispatch = useDispatch();
    const width = useWidth(window.innerWidth);

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Особистий Кабінет</Divider>
                <Space>
                    <h4 style={{padding: 5}}>Повідомлення на отримання книги</h4>
                    <Row>
                    </Row>
                </Space>
            </Content>
        </Layout>
    );
}