import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Button, Row, Col, Skeleton, Avatar} from 'antd';
import {getLinks} from "./additional/service";
import {useWidth} from "../../hooks/useDimension";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const {Header} = Layout;

export const Navigationbar: React.FunctionComponent = () => {

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);

    return (
        <Layout>
            <Header className="header">
                <Row style={{marginLeft: 0, marginRight: 0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    <div><Avatar shape="square" size="large" icon={null}/></div>
                    <Col className="gutter-row" span={15}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            {getLinks(user).map((item, index) => (
                                <Menu.Item key={index}>
                                    <Link to={item.href}>{item.title}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    {!!user.credentials &&
                    <>
                        <Col
                            style={{display: width < 500 ? "none" : "inherit"}}
                            className="gutter-row" span={4}>
                            <Button
                                style={{margin: "17px 0 0 auto"}}
                                type="primary" ghost>
                                Увійти
                            </Button>
                        </Col>
                        <Col span={width > 500 ? 3 : 4}>
                            <Skeleton.Avatar
                                style={{margin: "18px 45%"}}
                                active={true}
                                size={30}
                                shape={"circle"}/>
                        </Col>
                    </>}

                </Row>
            </Header>
        </Layout>
    );
}
