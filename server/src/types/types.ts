
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    role:string
}


export type LoginResponseType = {
    token?: string,
    user?: UserInterface,
    loginError?: string
    registrationError?:string
}