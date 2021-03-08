import React from "react";
import {Divider, Layout, Col, Row} from "antd";
import {BookCard} from "../additionalComponents/BookCard";
import {CardProps} from "../../types/types";

let mockCards:CardProps[] = [
    {title:"Title 1", body: "Body 1" },
    {title:"Title 2", body: "Body 2" },
    {title:"Title 3", body: "Body 3" },
    {title:"Title 4", body: "Body 4" },
];

export const MainPage = () => {
    const {Content} = Layout;
    return (
        <Layout>
            <Content style={{minHeight:window.innerHeight + "px"}}>
                <Divider orientation="left">Книги</Divider>
                <Row style ={{margin: 0}}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 35 }}>
                {mockCards.map((item,index) =>
                    <Col style ={{margin: "0 auto"}}
                        span = {31}>
                        <BookCard props={item} key={index}/>
                    </Col>)}
                </Row>
            </Content>
        </Layout>
    );
}