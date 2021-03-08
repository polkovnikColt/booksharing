import {useState, useEffect} from 'react';
import axios from 'axios';

export const useHttp =
    (url: string, METHOD: string | any = "get", options?: any ): [boolean, any] => {
        const [response, setResponse] = useState({});
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true);
            axios({
                url: url,
                method: METHOD,
                data: options
            }).then(res => res.data)
                .then(res => {
                        setResponse(res);
                        setLoading(false);
                    }
                ).catch(e => console.error(e));
        })
        return [loading, response];
    }