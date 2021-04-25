import React, {ChangeEvent, useState} from 'react';
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {GeneralForm} from "../../../components/additionalComponents/forms/GeneralForm";
import {fileEncodeBase64, formData} from "./service";
import {UploaderItem} from "../../../components/additionalComponents/uploader/UploadeItem";
import {UploadChangeParam} from "antd/es/upload";
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "../../../store/user/userActions";
import {UploadFile} from "antd/es/upload/interface";
import {BookInterface} from "../../../types/types";
import {RootState} from "../../../store/store";

const {Option} = Select;

export const AddBook: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store:RootState) => store.user);
    const [visible, setVisible] = useState(false);
    const [file, setFile] = useState('');
    const [book, setBook] = useState({
        name: '',
        user: user.credentials.id,
        author: '',
        genre: '',
        photo: '',
        description: '',
        views: 0
    } as BookInterface);


    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = e.target.files && e.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            setBook({...book, ['photo']: fr.result.toString()});
        }
        fr.readAsDataURL(fileUploaded);
    }

    const changeHandler = (name: string, value: string): void => {
        setBook({...book, [name]: value});
    }

    const submitHandler = () => {
        dispatch(addBook(book));
        setVisible(false);
    }

    const showDrawer = () => {
        setVisible(prevState => !prevState);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                ghost
                onClick={showDrawer}
            >
                <PlusOutlined/> Додати книгу
            </Button>
            <Drawer
                title="Додати книгу"
                width={65 + "%"}
                onClose={onClose}
                visible={visible}
                bodyStyle={{paddingBottom: 80}}
            >
                <Form layout="vertical" hideRequiredMark>
                    <GeneralForm
                        buttonText='Додати'
                        formData={formData}
                        inputHandler={changeHandler}
                        submitHandler={submitHandler}
                        uploaderHandler={uploadHandler}
                        file={book.photo}
                        hasSelector={false}
                        hasCheckbox={false}
                        hasUploader={true}
                    />
                </Form>
            </Drawer>
        </>
    );
}
