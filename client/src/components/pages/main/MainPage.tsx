import React, {useEffect, useState} from "react";
import {Divider, Layout, Col, Row, Spin} from "antd";
import {GeneralForm} from "../../additionalComponents/forms/GeneralForm";
import {formData, mockUsers} from "./additional/service";
import {UserInterface} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {loadAllUsers, login} from "../../../store/user/userActions";
import {RootState} from "../../../store/store";
import './mainPage.styles.scss';
import {useWidth} from "../../../hooks/useDimension";
import {LabelItem} from "../../additionalComponents/labels/LabelItem";
import {Greetings} from "../../additionalComponents/labels/Grettings";


const {Content} = Layout;

export const MainPage: React.FC = () => {


    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const width = useWidth(window.innerWidth);
    const [asAdmin, setAsAdmin] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [cred, setCred] = useState({
        id: 0,
        email: '',
        password: '',
        role: 'user'
    } as UserInterface);

    useEffect(() => {
        dispatch(loadAllUsers(mockUsers));
    },[])

    const handleChange = (name: string, value: string): void => {
        setCred({...cred, [name]: value});
    }

    const handleSubmit = (): void => {
        setLoading(prevState => !prevState)
        dispatch(login(cred));
        setLoading(prevState => !prevState)
    }

    return (
        <Layout>
            <Content style={{minHeight: window.innerHeight}}>
                <Divider orientation="left">Головна</Divider>
                <Greetings
                    isLogged={!!user.credentials}
                />
                <Row
                    className="m-0"
                    style={{width: width }}
                    gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <div
                        className="w-100"
                    >
                        {!user.credentials &&
                        <Col
                            className ="mx-auto"
                            span={width < 500 ?22:12}>
                            <GeneralForm
                                actionName="Адміністратор?"
                                hasSelector={false}
                                hasCheckbox={true}
                                checkboxHandler={
                                    () => setAsAdmin(prev => !prev)
                                }
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