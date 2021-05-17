import React from "react";
import {Divider, Layout, Col, Row} from "antd";
import { getBooksByPreference, rules} from "./additional/service";
import {useSelector} from "react-redux";
import {loadPreference} from "../../store/user/userActions";
import {RootState} from "../../store/store";
import './mainPage.styles.scss';
import {useWidth} from "../../hooks/useDimension";
import {GlobalOutlined} from "@ant-design/icons";
import {useFormHandler} from "../../hooks/useFormHandler";
import {AutoCompleteSearch} from "../../components/additionalComponents/forms/AutoCompleteSearch";
import {usePreload} from "../../hooks/usePreload";
import {BookCard} from "../../components/additionalComponents/books/BookCard";
import {AlertMessage} from "../../components/additionalComponents/alert/AlertMessage";
import {useSearch} from "../../hooks/useSearch";
import {UserCard} from "../../components/additionalComponents/user-components/UserCard";
import {Rules} from "../../components/additionalComponents/labels/Rules";

const {Content} = Layout;

export const MainPage: React.FC = () => {
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);
    const {object, onSelect} = useFormHandler("")
    const {type, result} = useSearch(object, user.allBooks, user.allUsers);

    usePreload(loadPreference, user.credentials?.id)

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight}}>
                <Divider
                    orientation="left">
                    Головна
                    <span className="mx-1">
                        <GlobalOutlined/>
                    </span>
                </Divider>
                <div className="main-title">Вітаємо у КНИГООБМІНІ</div>
                {!!user.credentials &&
                    <>
                        <AlertMessage type="success">
                            <Rules rules={rules} header="Підказка #1"/>
                        </AlertMessage>
                        <AutoCompleteSearch
                            books={user.allBooks}
                            users={user.allUsers}
                            onSelect={onSelect}
                        />
                        <Divider orientation="center">
                            {object.length ? <h3>Результати пошуку: </h3> : <h3>Рекомендації: </h3>}
                        </Divider>
                    </>
                }

                <Row
                    className="m-0"
                    style={{width: width}}
                    gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <div
                        className="w-100"
                    >
                        {!object
                        && user.credentials
                        && !(Object.keys(user.preference).length === 0)
                        && getBooksByPreference(user.preference, user.allBooks)
                            .map(book => {
                                return !book.isExchanged &&
                                !book.isOrdered ? (
                                    <Col
                                        className = "mx-auto"
                                        span = {12}>
                                    <BookCard
                                        user={book.user}
                                        canAdd={true}
                                        name={book.name}
                                        isLogged={!!user.credentials}
                                        isMine={false}
                                        photo={book.preview}
                                        author={book.author}
                                        genre={book.genre}
                                    />
                                    </Col>
                                ) : null
                            })
                        }
                        {!!user.credentials &&
                        <Row>
                                {type === "user" ?
                                    result.map(user => (
                                        <Col
                                            span = {width < 500 ? 22:12}
                                            className="mx-auto">
                                            <UserCard
                                                userId={user.id}
                                                name={user.name}
                                                avatar={user.avatar}
                                                phoneNumber={user.phoneNumber}
                                                city={user.city}
                                                info={user.info}
                                            />
                                        </Col>
                                    )) :
                                    result.map(book =>
                                        <Col
                                            span = {width < 500 ? 22: 12}
                                            className="mx-auto">
                                            <BookCard
                                                canAdd={true}
                                                bookId={book.id}
                                                isOrdered={book.isOrdered}
                                                user={book.user}
                                                name={book.name}
                                                isLogged={true}
                                                isMine={book.id === book.user[0].id}
                                                photo={book.preview}
                                                author={book.author}
                                                genre={book.genre}
                                            />
                                        </Col>
                                    )
                                }
                        </Row>
                        }
                    </div>
                </Row>
            </Content>
        </Layout>
    );
}