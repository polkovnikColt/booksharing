import {BookInterface} from "../../../types/types";

export const getBookIdByName = (allBooks:BookInterface[], bookName) => {
    return allBooks.find(book => book.name === bookName.name).id;
}