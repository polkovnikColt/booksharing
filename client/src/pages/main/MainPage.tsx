import React from "react";
import {Divider, Layout, Col, Row} from "antd";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";
import {formData, rules} from "./additional/service";
import {useSelector} from "react-redux";
import {loadAllBooks, loadAllUsers, login} from "../../store/user/userActions";
import {RootState} from "../../store/store";
import './mainPage.styles.scss';
import {useWidth} from "../../hooks/useDimension";
import {GlobalOutlined} from "@ant-design/icons";
import {Greetings} from "../../components/additionalComponents/labels/Grettings";
import {useFormHandler} from "../../hooks/useFormHandler";
import {AutoCompleteSearch} from "../../components/additionalComponents/forms/AutoCompleteSearch";
import {usePreload} from "../../hooks/usePreload";
import {useDispatchFunc} from "../../hooks/useDispatchFunction";
import {BookCard} from "../../components/additionalComponents/books/BookCard";
import {AlertMessage} from "../../components/additionalComponents/alert/AlertMessage";
import {useSearch} from "../../hooks/useSearch";
import {UserCard} from "../../components/additionalComponents/user-components/UserCard";
import {messageFormData} from "../book/additional/service";
import {Rules} from "../../components/additionalComponents/labels/Rules";

const {Content} = Layout;

export const MainPage: React.FC = () => {

    const handleLogin = useDispatchFunc(login);
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);
    const {object, changeHandler, reload, onSelect} = useFormHandler({})
    const {type, result} = useSearch(object, user.allBooks, user.allUsers);

    usePreload(loadAllBooks);
    usePreload(loadAllUsers)

    const handleSubmit = (): void => {
        handleLogin(object)();
        reload("");
    }

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
                {!!user.credentials ?
                    <>
                        <AlertMessage type="success">
                           <Rules rules={rules} header="Підказа #1"/>
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
                    :
                    <Greetings/>
                }

                <Row
                    className="m-0"
                    style={{width: width}}
                    gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <div
                        className="w-100"
                    >
                        {!user.credentials &&
                        <Col
                            className="mx-auto"
                            span={width < 500 ? 22 : 12}>
                            <GeneralForm
                                hasUploader={false}
                                hasSelector={false}
                                hasCheckbox={false}
                                buttonText='Увійти'
                                formData={formData}
                                inputHandler={changeHandler}
                                submitHandler={handleSubmit}
                            />
                        </Col>}
                        {!!user.credentials &&
                        <Row>
                            <Col
                                className = "mx-auto"
                                span={width < 500 ? 22 : 12}>
                                {type === "user" ?
                                    result.map(user => (
                                        <div className="mx-auto">
                                            <UserCard
                                                userId={user.id}
                                                name={user.name}
                                                avatar={user.avatar}
                                                phoneNumber={user.phoneNumber}
                                                city={user.city}
                                                info={user.info}
                                            />
                                        </div>
                                    )) :
                                    result.map(book =>
                                        <div className="mx-auto">
                                            <BookCard
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
                                        </div>
                                    )
                                }
                            </Col>
                        </Row>
                        }
                    </div>
                </Row>
            </Content>
        </Layout>
    );
}