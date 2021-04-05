
export const LOADING ="LOADING";

export const loading = (state:boolean) => {
    return {
        type:LOADING,
        action:state
    }
}