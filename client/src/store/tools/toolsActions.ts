
export const LOADING ="LOADING";
export const SHOW = "SHOW";
export const CLOSE_MAIN = "CLOSE_MAIN";

export const loading = (state:boolean) => {
    return {
        type:LOADING,
        action:state
    }
}

export const show = () => {
}

export const closeMain = () => {
    console.log(123)
    return {
        type: CLOSE_MAIN,
        payload: false
    }
}
