import React from 'react';
import {Col, Layout, Row} from "antd";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";
import {useWidth} from "../../hooks/useDimension";
import {useFormHandler} from "../../hooks/useFormHandler";
import {useDispatchFunc} from "../../hooks/useDispatchFunction";
import {loadAllBooks, loadAllUsers, login} from "../../store/user/userActions";
import {formData} from "./additional/service";
import {Greetings} from "../../components/additionalComponents/labels/Grettings";
import {usePreload} from "../../hooks/usePreload";

const {Content} = Layout;

export const HomePage: React.FC = () => {

    const width = useWidth(window.innerWidth);
    const handleLogin = useDispatchFunc(login);
    const {object, changeHandler} = useFormHandler({});

    usePreload(loadAllBooks);
    usePreload(loadAllUsers);

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <div className="main-title">Вітаємо у КНИГООБМІНІ</div>
            <Greetings/>
            <Row>
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
                        submitHandler={handleLogin(object)}
                    />
                </Col></Row>
        </Content>
    )
}