import React, {useState} from 'react';
import {UserInterface} from "../../../types/types";
import {Avatar, Button, Modal} from "antd";
import {GeneralForm} from "../forms/GeneralForm";

type UserModalProps = {
    name: string
    avatar: string
}

export const UserModal: React.FC<UserModalProps> = (
    {
        name,
        avatar,
    }
) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div
                onClick={showModal}>
                <Avatar src={avatar}/>
            </div>
            <Modal
                title={name}
                visible={isModalVisible}
                onCancel={handleOk}
                footer={[]}
            >

            </Modal>
        </>
    )
}