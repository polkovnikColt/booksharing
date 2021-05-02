import React, { useState} from "react";
import {Divider, Layout, Col, Row} from "antd";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";
import {formData} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {loadAllUsers, login} from "../../store/user/userActions";
import {RootState} from "../../store/store";
import './mainPage.styles.scss';
import {useWidth} from "../../hooks/useDimension";
import {GlobalOutlined} from "@ant-design/icons";
import {Greetings} from "../../components/additionalComponents/labels/Grettings";

const {Content} = Layout;

export const MainPage: React.FC = () => {


    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);
    const [isLoading, setLoading] = useState(false);
    const [cred, setCred] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name: string, value: string): void => {
        setCred({...cred, [name]: value});
    }

    const handleSubmit = (): void => {
        setLoading(prevState => !prevState)
        dispatch(login(cred));
        dispatch(loadAllUsers())
        setLoading(prevState => !prevState)
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
                <Greetings
                    isLogged={!!user.credentials}
                />
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
                                inputHandler={handleChange}
                                submitHandler={handleSubmit}
                                isLoading={isLoading}
                            />
                        </Col>}
                    </div>
                </Row>
            </Content>
        </Layout>
    );
}