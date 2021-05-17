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

export const useDispatchFunctions = (...dispatchFunctions) => {
    const dispatch = useDispatch();

    return (...credentials) => {
        return () => {
            for(let i = 0;i < dispatchFunctions.length; i++) {
                dispatch(credentials[i] ?
                    dispatchFunctions[i](credentials[i]) :
                    dispatchFunctions[i]())
            }
        }
    }
}