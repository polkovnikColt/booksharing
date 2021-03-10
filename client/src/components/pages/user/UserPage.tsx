import React from 'react';
import {Badge, Col, Divider, Layout, Row, Space} from "antd";
import {BookComment} from "./additional/BookComment";
import {UserInfoProps} from "../../../types/types";
import {useDispatch,useSelector} from 'react-redux';
import {removeBook} from "../../../store/user/userActions";
import '../../mainStyles.scss';

export const UserPage: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector(item => item.user.receivedBooks);

    const remove = (name:string) => {
        dispatch(removeBook(name));
    }

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Особистий Кабінет</Divider>
                <Space>
                    <h4 style={{padding: 5}}>Повідомлення на отримання книги
                        <Badge style={{margin: 5}}
                               count={books.length}
                               className="site-badge-count-4"/>
                        :
                    </h4>
                    <h4 style={{padding: 5, marginLeft: 47}}>______:</h4>
                </Space>
                <Row style ={{marginLeft:0,marginRight:0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    <Col className="border-right"
                         style={{overflowY: "visible",minHeight:window.innerHeight}}
                         span={20}>
                        {books.map((item, index) => [
                            <BookComment props={item}
                                         key={index}
                                         remove = {remove}/>
                        ])}
                    </Col>
                    <Col span={14}>

                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}