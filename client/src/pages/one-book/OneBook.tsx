import React from 'react';
import {Col, Layout, Row} from "antd";
import {useStateParams} from "../../hooks/useStateParams";
import {ImageItem} from "../../components/additionalComponents/images/ImageItem";
import {useWidth} from "../../hooks/useDimension";

const {Content} = Layout;

export const OneBook:React.FC = () => {

    const path = window.location.href.split('/');

    const width = useWidth(window.innerWidth);
    const {currentBook} = useStateParams('',path[path.length-1]);

    return (
        <Content style ={{minHeight: window.innerHeight}}>
            <Row>
                <Col
                    className ="mx-auto"
                    span = {18}>
                    <h3>{currentBook.name}</h3>
                    <ImageItem
                        base64={currentBook.preview}
                        widthInPer={width > 500 ? 40 : 100}
                        />
                    <h3>{currentBook.genre}</h3>
                    <h3>{currentBook.author}</h3>
                    <h3>{currentBook.description}</h3>
                    <h4>Бажаючі отримати: {currentBook.views}</h4>
                </Col>
            </Row>
        </Content>
    )
}