import React from 'react';
import {BookInterface, FormDataInterface, UserInterface} from "../../../../types/types";
import {GeneralForm} from "../../../../components/additionalComponents/forms/GeneralForm";
import {useFormHandler} from "../../../../hooks/useFormHandler";
import {useDispatchFunc} from "../../../../hooks/useDispatchFunction";
import {updateBook} from "../../../../store/user/userActions";

type LocalFormProps = {
    formData: FormDataInterface[]
    book?: BookInterface,
    user?:UserInterface
}

export const LocalForm:React.FC<LocalFormProps> = (
    {
        formData,
        book,
        user
    }
    ) => {

    const {object, changeHandler,uploadHandler} = useFormHandler(book);
    const submitHandler = useDispatchFunc(updateBook);

    return (
        <GeneralForm
            buttonText="Оновити"
            formData={formData}
            inputHandler={changeHandler}
            submitHandler={submitHandler(object)}
            hasSelector={false}
            hasCheckbox={false}
            hasUploader={true}
            uploaderHandler={uploadHandler}
            />
    )

}