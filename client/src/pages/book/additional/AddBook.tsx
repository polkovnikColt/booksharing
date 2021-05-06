import React, {useState} from 'react';
import {Drawer, Form, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {GeneralForm} from "../../../components/additionalComponents/forms/GeneralForm";
import {formData} from "./service";
import { useSelector} from "react-redux";
import {addBook} from "../../../store/user/userActions";
import {RootState} from "../../../store/store";
import {useDispatchFunc} from "../../../hooks/useDispatchFunction";
import {useFormHandler} from "../../../hooks/useFormHandler";

export const AddBook: React.FC = () => {

    const handleAddBook = useDispatchFunc(addBook);
    const user = useSelector((store: RootState) => store.user);
    const [visible, setVisible] = useState(false);
    const {
        object,
        changeHandler,
        uploadHandler
    } = useFormHandler({
        user: [user.credentials],
        views: 0
    }, 'preview');

    const submitHandler = () => {
        handleAddBook(object)();
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
                        file={object.preview}
                        hasSelector={false}
                        hasCheckbox={false}
                        hasUploader={true}
                    />
                </Form>
            </Drawer>
        </>
    );
}
