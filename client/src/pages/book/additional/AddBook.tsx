import React, {ChangeEvent, useState} from 'react';
import {Drawer, Form, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {GeneralForm} from "../../../components/additionalComponents/forms/GeneralForm";
import {compressImage, formData} from "./service";
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "../../../store/user/userActions";
import {BookInterface} from "../../../types/types";
import {RootState} from "../../../store/store";

export const AddBook: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store:RootState) => store.user);
    const [visible, setVisible] = useState(false);
    const [book, setBook] = useState({
        name: '',
        user: user.credentials.id,
        ownerName: user.credentials.name,
        author: '',
        genre: '',
        preview: '',
        description: '',
        views: 0
    } as BookInterface);


    const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = e.target.files && e.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            setBook({...book, ['preview']: fr.result.toString()});
        }
        const compressedFile = await compressImage(fileUploaded);
        fr.readAsDataURL(compressedFile);
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
                        file={book.preview}
                        hasSelector={false}
                        hasCheckbox={false}
                        hasUploader={true}
                    />
                </Form>
            </Drawer>
        </>
    );
}
