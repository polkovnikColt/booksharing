import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Row, Col, Avatar, Dropdown} from 'antd';
import {getLinks, updateFormData} from "./additional/service";
import {useWidth} from "../../hooks/useDimension";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {unlog, updateUser} from "../../store/user/userActions";
import {UserOutlined, CrownOutlined} from "@ant-design/icons";
import {useDispatchFunc} from "../../hooks/useDispatchFunction";
import {ModalUpdate} from "../additionalComponents/modal/ModalUpdate";

const {Header} = Layout;

export const Navigationbar: React.FunctionComponent = () => {

    const width = useWidth(window.innerWidth);
    const user = useSelector((store: RootState) => store.user);
    const handleUnlog = useDispatchFunc(unlog);

    return (
        <Layout>
            <Header className="header">
                <Row style={{marginLeft: 0, marginRight: 0}}
                     gutter={{xs: 8, sm: 16, md: 24, lg: 35}}>
                    <div><Avatar shape="square" size="large" icon={null}/></div>
                    <Col className="gutter-row"
                         span={width < 500 ? 7 : 15}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            {getLinks(user).map((item, index) => (
                                <Menu.Item key={index}>
                                    <Link to={item.href}>{item.title}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col span={width > 500 ? 7 : 12}>
                        <Row>
                            {!!user.credentials &&
                            <Dropdown.Button
                                className="my-8"
                                overlay={
                                    <Menu onClick={null}>
                                        <Menu.Item key="1">
                                            <ModalUpdate
                                                photoName="avatar"
                                                buttonText="Завантижити дані"
                                                title={user.credentials?.name}
                                                book={user.credentials}
                                                formData={updateFormData}
                                                dispatchFunction={updateUser}
                                            />
                                        </Menu.Item>
                                        <Menu.Item
                                            key="3">
                                            <a
                                                target="_blank"
                                                href="https://mail.google.com/mail/u/0/?pli=1#inbox">
                                                admin@admin.com
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={handleUnlog()}
                                            key="2">
                                            Вийти
                                        </Menu.Item>
                                    </Menu>
                                }>
                                <Link to="/cabinet">
                                    {user.credentials?.name}
                                    {user.credentials?.role === "admin" ?
                                        <CrownOutlined/> :
                                        <UserOutlined/>
                                    }
                                </Link>
                            </Dropdown.Button>
                            }
                        </Row>
                    </Col>
                </Row>
            </Header>
        </Layout>
    );
}
