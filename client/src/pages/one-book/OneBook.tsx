import React from 'react';
import {Col, Layout, Row} from "antd";
import {useStateParams} from "../../hooks/useStateParams";
import {ImageItem} from "../../components/additionalComponents/images/ImageItem";
import {useWidth} from "../../hooks/useDimension";
import {usePreload} from "../../hooks/usePreload";
import {addToPreference} from "../../store/user/userActions";
import {PreferenceInputInterface} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const {Content} = Layout;

export const OneBook: React.FC = () => {

    const path = window.location.href.split('/');

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);
    const {currentBook} = useStateParams('', path[path.length - 1]);

    usePreload(addToPreference,
        {
            author: currentBook.author,
            genre: currentBook.genre,
            user: user.credentials.id
        } as PreferenceInputInterface)

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <Row>
                <Col
                    className="mx-auto"
                    span={18}>
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