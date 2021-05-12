import React, {ChangeEvent} from 'react';
import {Col, Row, Input, Button, Form} from 'antd';
import {FormDataInterface} from "../../../types/types";
import {FormItem} from "./FormItem";
import './form.styles.scss'
import {Selector} from "../selector/Selector";
import {Key} from "antd/es/table/interface";
import {CheckboxItem} from "./CheckboxItem";
import {UploaderItem} from "../uploader/UploadeItem";

type GeneralFormProps = {
    buttonText: string
    formData: FormDataInterface[]
    inputHandler: (name: string, value: string) => void
    submitHandler: () => void
    selectorHandler?: (name:string, value: string) => void
    checkboxHandler?: () => void
    uploaderHandler?: (e: ChangeEvent<HTMLInputElement>) => void
    file?: string
    values?: Key[]
    selectorName?: string
    actionName?: string
    isLoading?: boolean
    hasSelector: boolean
    hasCheckbox: boolean
    hasUploader: boolean
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
        selectorName,
        file,
        uploaderHandler,
        hasUploader

    }
) => {
    return (
        <div className ="form-padding">
            {hasSelector &&
            <Selector
                name={selectorName}
                values={values}
                changeHandler={selectorHandler}
            />}
            {formData.map((formItem: FormDataInterface) =>
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
            {hasUploader &&
            <UploaderItem
                file={file}
                uploadHandler={uploaderHandler}
            />
            }
            {buttonText && <Button
                loading={isLoading}
                onClick={submitHandler}
                type='primary'
            >
                {buttonText}
            </Button>}
        </div>
    )
}