export const LOGIN:string = "LOGIN";
export const UNLOG:string = "UNLOG";
export const REMOVE_BOOK:string = "REMOVE_BOOK";
export const ADD_BOOK:string = "LOAD_BOOKS";
export const APPROVE:string = "APPROVE";

export const removeBook = (name:string): {} => {
   return {type:REMOVE_BOOK,payload:name}
};

export const approveBook = (book:{}):{} => {
   return {type:APPROVE, payload:book[0]};
}

export const addBook = (book:{}):{} => {
   return {type:ADD_BOOK,payload:book};
}