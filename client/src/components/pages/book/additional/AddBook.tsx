import React,{useState} from 'react';
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const {Option} = Select;

export const AddBook:React.FC = () =>  {

    const [visible,setVisible] = useState(false);

    const showDrawer = () => {
       setVisible(prevState => !prevState);
    };

    const onClose = () => {
       setVisible(false);
    };

        return (
            <>
                <Button type="primary" onClick={showDrawer}>
                    <PlusOutlined/> Додати книгу
                </Button>
                <Drawer
                    title="Додати книгу"
                    width={65 + "%"}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{paddingBottom: 80}}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={onClose} style={{marginRight: 8}}>
                                Закрити
                            </Button>
                            <Button onClick={onClose} type="primary">
                                Додати
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{required: true, message: 'Please enter user name'}]}
                                >
                                    <Input placeholder="Please enter user name"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="owner"
                                    label="Owner"
                                    rules={[{required: true, message: 'Please select an owner'}]}
                                >
                                    <Select placeholder="Please select an owner">
                                        <Option value="xiao">Xiaoxiao Fu</Option>
                                        <Option value="mao">Maomao Zhou</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="approver"
                                    label="Approver"
                                    rules={[{required: true, message: 'Please choose the approver'}]}
                                >
                                    <Select placeholder="Please choose the approver">
                                        <Option value="jack">Jack Ma</Option>
                                        <Option value="tom">Tom Liu</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="dateTime"
                                    label="DateTime"
                                    rules={[{required: true, message: 'Please choose the dateTime'}]}
                                >
                                    <DatePicker.RangePicker
                                        style={{width: '100%'}}
                                        getPopupContainer={trigger => trigger.parentElement}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter url description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="please enter url description"/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
}
