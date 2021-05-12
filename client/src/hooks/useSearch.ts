import {useEffect, useState} from 'react';

export const useSearch = (val, ...searchData) => {
    const [type, setType] = useState<string>("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (typeof val === "string") {
            if(!val.length) {
                setResult([]);
                return;
            }
            const data: string[] = val.split(' ');
            const book = searchData[0]
                .filter(book => book.id === Number.parseInt(data[0])
                    && book.name.includes(data[1]));
            if (book.length) {
                setType("book");
                setResult(book);
            }
            const user = searchData[1]
                .filter(user => user.id === Number.parseInt(data[0])
                    && user.name.includes(data[1]));
            if (user.length) {
                setType("user")
                setResult(user);
            }
        }
    }, [val])

    return {type, result};
}