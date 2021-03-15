import React from 'react';
import {Badge, Col, Divider, Layout, Row, Space} from "antd";
import {BookComment} from "./additional/BookComment";
import {useDispatch,useSelector} from 'react-redux';
import {approveBook, removeBook} from "../../../store/user/userActions";
import {a} from './additional/service';
import '../../mainStyles.scss';
import {useWidth} from "../../../hooks/useDimension";

export const UserPage: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector(item => item.user);
    const width = useWidth(window.innerWidth);

    const remove = (name:string):void => {
        dispatch(removeBook(name));
    }

    const approve = (name:string,user):void => {
        const book = user.receivedBooks.filter(item => item.name === name);
        dispatch(approveBook(book));
    }

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Особистий Кабінет</Divider>
                <Space>
                    <h4 style={{padding: 5}}>Повідомлення на отримання книги
                        <Badge style={{margin: 5}}
                               count={user.receivedBooks.length}
                               className="site-badge-count-4"/>
                        :
                    </h4>
                    <h4 style={{padding: 5, marginLeft: 47}}>______:</h4>
                </Space>
                <Row style ={{marginLeft:0,marginRight:0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    <Col className={width > 400 ? "border-right" : null}
                         style={{overflowY: "visible",minHeight:window.innerHeight}}
                         span={width > 400 ? 12 : 32}>
                        {user.receivedBooks.map((item, index) =>
                            <BookComment props={item}
                                         key={index}
                                         remove = {remove}
                                         approve = {approve}
                                         user = {user}
                            />
                        )}
                    </Col>
                    <Col span={width > 400 ? 12 : 32}>
                        {user.booksToSend.map((item,index) =>
                            <BookComment props={item}
                                         key={index}/>
                        )}
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}