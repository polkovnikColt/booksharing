import React from 'react';
import {Avatar, Col, Divider, Layout, Row, Space} from "antd";
import {useStateParams} from "../../hooks/useStateParams";
import {BookCard} from "../../components/additionalComponents/books/BookCard";
import {usePreload} from "../../hooks/usePreload";
import {loadUserComments} from "../../store/user/userActions";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {CommentManipulator} from "../../components/additionalComponents/comment/CommentManipulator";
import {commentFormData} from "./additional/service";
import {useWidth} from "../../hooks/useDimension";

const {Content} = Layout;

export const OneUser: React.FC = () => {
    const path = window.location.href.split('/');

    const width = useWidth(window.innerWidth)
    const user = useSelector((store:RootState) => store.user);
    const {currentUser,userBooks} = useStateParams(path[path.length - 1]);

    usePreload(loadUserComments, currentUser.id);

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <Row>
                <Col
                    className="mx-auto my-3"
                    span={18}>
                    <Space>
                        <Avatar size="large" src={currentUser.avatar}/>
                        <h3>{currentUser.name}</h3>
                    </Space>
                    <h3>
                        <Space>
                            Проживає у:
                            <span>{currentUser.city ?
                                currentUser.city :
                                "Місто не вказане"}
                            </span>
                        </Space>
                    </h3>
                    <h3>
                        <Space>
                            Контакти:
                        <span>{currentUser.email}</span>
                        <span>{currentUser.phoneNumber}</span>
                        </Space>
                    </h3>
                    <h3>{currentUser.info}</h3>
                </Col>
            </Row>
            <Divider
                className = "mx-1"
                orientation='center'>
                Книги користувача
            </Divider>
            <Row className = "form-padding">
                {userBooks.map(book => (
                    <Col
                        className = 'mx-auto my-3'
                        span = {width > 500 ? 10 : 22} >
                        <BookCard
                            userPage={true}
                            bookId={book.id}
                            name={book.name}
                            isLogged={true}
                            isMine={false}
                            photo={book.preview}
                            author={book.author}
                            genre={book.genre}
                            isOrdered={book.isOrdered}
                            />
                    </Col>
                ))}
            </Row>
            <Divider orientation="center">
                Відгуки на користувача
            </Divider>
            <Row>
                <CommentManipulator
                    comments={user.comments}
                    formData={commentFormData}
                    user={user.credentials}
                    currentUserId={currentUser.id}
                    />
            </Row>
        </Content>
    )
}