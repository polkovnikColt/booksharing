import React, {useState} from 'react';
import {Layout} from "antd";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";
import {formData} from './additional/service'
import {useDispatch} from "react-redux";
import {registration} from "../../store/user/userActions";
import {LabelItem} from "../../components/additionalComponents/labels/LabelItem";
import {useFormHandler} from "../../hooks/useFormHandler";

const {Content} = Layout;

export const RegistrationPage:React.FC = () => {

    const dispatch = useDispatch();
    const {object, changeHandler} = useFormHandler({});

    const submitHandler = ():void => {
        dispatch(registration(object));
    }

    return(
        <Content style={{minHeight: window.innerHeight}}>
            <div className = "form-padding">
                <h4>
                    Додаткову інформацію можливо додати в особистому кабінеті
                    <LabelItem isLink={false} color="red">*</LabelItem>
                </h4>
            <GeneralForm
                buttonText="Зареєструватися"
                formData={formData}
                inputHandler={changeHandler}
                submitHandler={submitHandler}
                hasSelector={false}
                hasCheckbox={false}
                hasUploader={false}
                />
            </div>
        </Content>
    )
}