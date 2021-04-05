import React from 'react';
import {Col, Row, Input, Button} from 'antd';
import {FormDataInterface} from "../../../types/types";
import {FormItem} from "./FormItem";
import './form.styles.scss'
import {Selector} from "../selector/Selector";
import {Key} from "antd/es/table/interface";
import {CheckboxItem} from "./CheckboxItem";

type GeneralFormProps = {
    buttonText: string
    formData: FormDataInterface[]
    inputHandler:(name:string,value:string) => void
    submitHandler:() => void
    selectorHandler?: () => void
    checkboxHandler?: () => void
    values?: Key[]
    selectorName?: string
    actionName?:string
    isLoading?: boolean
    hasSelector:boolean
    hasCheckbox:boolean
}

export const GeneralForm: React.FC<GeneralFormProps> = (
    {
        buttonText,
        formData,
        inputHandler,
        submitHandler,
        isLoading,
        hasSelector,
        selectorHandler,
        hasCheckbox,
        checkboxHandler,
        values,
        actionName,
        selectorName

    }
) => {
    return (
        <>
            {hasSelector &&
            <Selector
                name={selectorName}
                values={values}
                changeHandler={selectorHandler}
            />}
            {formData.map((formItem:FormDataInterface) =>
                <FormItem
                    name={formItem.name}
                    label={formItem.label}
                    message={formItem.message}
                    InputComponent={formItem.inputComponent}
                    changeHandler={inputHandler}
                />
                )}
            {hasCheckbox &&
            <CheckboxItem
                actionName={actionName}
                handler={checkboxHandler}
            />
            }
            <Button
                loading={isLoading}
                onClick={submitHandler}
                type='primary'
            >
                {buttonText}
            </Button>
        </>
    )
}