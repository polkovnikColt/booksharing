import React, {useState} from 'react';
import {AutoComplete, Input, SelectProps} from "antd";
import './form.styles.scss'
import {BookInterface, UserInterface} from "../../../types/types";

type AutoCompleteSearchProps = {
    onSelect: (value: string) => void,
    users: UserInterface[]
    books: BookInterface[]
}

const searchResult = (query: string, users: UserInterface[], books: BookInterface[]) => {

    const findUsers = users
        .filter(user => user.name
            .toLowerCase()
            .includes(query.toLowerCase()));
    const findBooks = books
        .filter(book =>
            book.name
                .toLowerCase()
                .includes(query.toLowerCase())
            || book.author
                .toLowerCase()
                .includes(query.toLowerCase()));
    const concat = findUsers.concat(findBooks as any) as any;
    if (!concat.length) {
        return new Array(1)
            .join('.')
            .split('.')
            .map((_, index) => {
                return {
                    value: 0,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
            <span>
                Нічого не знайдено
            </span>
                        </div>
                    ),
                }
            })
    }

    return new Array(concat.length)
        .join('.')
        .split('.')
        .map((_, index) => {
            const result = concat[index].id + " " + concat[index].name;
            return {
                value: result,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                    <span>
                        {concat[index].name}
                    </span>
                        <span className="mx-1">
                            {concat[index]?.author}
                         <span className = "mx-1">
                             {concat[index]?.user ? concat[index]?.user[0].name :null}
                         </span>
                        </span>
                    </div>
                ),
            }
        })
}
export const AutoCompleteSearch: React.FC<AutoCompleteSearchProps> = (
    {
        onSelect,
        users,
        books
    }
) => {

    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value, users, books) : []);
        onSelect(value);
    };

    return (
        <div className="p-3">
            <span className="label">
                Пошук цікавого:
            </span>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{width: 70 + "%"}}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
            >
                <Input
                    size="large"
                    placeholder="Введіть назву книги або ім'я користувача"
                />
            </AutoComplete>
        </div>
    )
}