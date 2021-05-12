import {FormDataInterface, LinkInterface} from "../../../types/types";
import {UserState} from "../../../types/types";
import React from "react";
import {Input} from "antd";


export const getLinks = (user: UserState): LinkInterface[] => {
    if (!!user.credentials) {
        if (user.credentials.role === 'admin') {
            return [
                {title: "Головна", href: "/"},
                {title: "Книги", href: "/books"},
                {title: "Кабінет", href: "/user"},
                {title: "Адміністратор", href: "/admin"},
            ]
        }
        return [
            {title: "Головна", href: "/"},
            {title: "Книги", href: "/books"},
            {title: "Кабінет", href: "/cabinet"}
        ]
    }
    return [
        {title: "Головна", href: "/"},
        {title: "Книги", href: "/books"},
    ]
}

export const updateFormData: FormDataInterface[] = [
    {
        label: "Ім'я",
        name: "name",
        inputComponent: Input
    },
    {
        label: "Місто",
        name: "city",
        inputComponent: Input
    },
    {
        label: "Телефон",
        name: "phoneNumber",
        inputComponent: Input
    },
    {
        label: "Про себе",
        name: "info",
        inputComponent: Input.TextArea
    },

]