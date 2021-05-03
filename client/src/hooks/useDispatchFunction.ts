import {useDispatch} from "react-redux";

export const useDispatchFunc = (dispatchFunction) => {
    const dispatch = useDispatch();

    return (credentials = null) => {
        return () =>
            dispatch(credentials ?
                dispatchFunction(credentials) :
                dispatchFunction()
            );
    }

}