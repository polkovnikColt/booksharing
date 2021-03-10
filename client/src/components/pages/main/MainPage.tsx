import React from "react";
import {Divider, Layout, Col, Row} from "antd";
import "../../mainStyles.scss"

export const MainPage:React.FC = () => {

    const {Content} = Layout;

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight + "px"}}>
                <Divider orientation="left">Головна</Divider>
            </Content>
        </Layout>
    );
}