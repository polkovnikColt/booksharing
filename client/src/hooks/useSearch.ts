import {useState} from 'react';

export const useSearch = (searchFunc, ...searchData) => {
    const [val, setVal] = useState<string>("");
    const [state, setState] = useState({});

    const searchHandler = () => {

        const data: string[] = val.split(' ');
        const book = searchData[0]
            .filter(book => book.id === Number.parseInt(data[0])
                && book.name === data[1]);
        if (book.length) {
            setState({type: "book", data: book})
        }
        const user = searchData[1]
            .filter(user => user.id === Number.parseInt(data[0])
                && user.name === data[1]);
        if (user.length) {
            setState({type: "user", data: user});
        }
        setState(null)
    }

    return {state, searchHandler};
}