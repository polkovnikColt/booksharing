import React from 'react';
import {Layout, Menu, Button, Row, Col} from 'antd';
import {getLinks} from "./additional/service";


export const Navigationbar: React.FunctionComponent = () => {

    const {Header} = Layout;

    return (
        <Layout>
            <Header className="header">
                <Row style={{height: "60px"}}>
                    <Col className="gutter-row" span={20}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            {getLinks().map((item, index) => (
                                <Menu.Item key={index}>{item.title}</Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Button type="primary" ghost>
                            Увійти
                        </Button>
                    </Col>
                </Row>
            </Header>
        </Layout>
    );
}
