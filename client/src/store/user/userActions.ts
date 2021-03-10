export const LOGIN:string = "LOGIN";
export const UNLOG:string = "UNLOG";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const LOAD_BOOKS = "LOAD_BOOKS";

export const removeBook = (name:string): {} => {
   return {type:REMOVE_BOOK,payload:name}
};