import React, {useState} from 'react';
import {Layout, Menu, Col, Space} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {useWidth} from "../../hooks/useDimension";
import {getLinks} from "./additional/service";


// @ts-ignore
export const Sidebar: React.FunctionComponent = () => {
    const {Header, Sider,Content} = Layout;

    const width: number = useWidth(window.innerWidth);
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsed: () => void = () => {
        setCollapsed(prev => !prev)
    };

    return (
        <Layout>
            <Sider
                style={{
                    minHeight: window.innerHeight,
                }}
                trigger={null}
                collapsible
                collapsed={collapsed}>
                <div className="logo"/>

                <Menu theme="dark" mode="inline">
                    {getLinks().map((item, index) => (
                        <Menu.Item
                            key={index}>
                            {React.createElement(item.icon)}
                            {collapsed ? null : item.title}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Col style={{maxHeight: "50px"}}
                 className="gutter-row"
                 span={1}>
                        <Space align={'center'}>
                            <Header className="site-layout-background"
                                    style={{padding: "0 10px", backgroundColor: "inherit"}}>
                                {React.createElement(
                                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: handleCollapsed,

                                })}
                            </Header>
                        </Space>
            </Col>
        </Layout>
    );
}