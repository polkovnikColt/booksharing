import React, {ChangeEvent, useState} from 'react';
import {Layout} from "antd";
import {GeneralForm} from "../../components/additionalComponents/forms/GeneralForm";
import {formData} from './additional/service'
import {useDispatch} from "react-redux";
import {registration} from "../../store/user/userActions";

const {Content} = Layout;

export const RegistrationPage:React.FC = () => {

    const dispatch = useDispatch();
    const [user,setUser] = useState({
        email:"",
        password:"",
        userName:"",
        photo:""
    });

    const changeHandler = (name:string, value:string):void => {
        setUser({...user, [name]: value});
    }

    const submitHandler = ():void => {
        dispatch(registration(user));
    }

    const uploadHandler = (e:ChangeEvent<HTMLInputElement>):void => {
        const file = e.target.files && e.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            setUser({...user, ['photo']: fr.result.toString()});
        }
        fr.readAsDataURL(file);
    }

    return(
        <Content style={{minHeight: window.innerHeight}}>
            <div className = "form-padding">
            <GeneralForm
                buttonText="Зареєструватися"
                formData={formData}
                inputHandler={changeHandler}
                submitHandler={submitHandler}
                uploaderHandler={uploadHandler}
                file={user.photo}
                hasSelector={false}
                hasCheckbox={false}
                hasUploader={true}
                />
            </div>
        </Content>
    )
}