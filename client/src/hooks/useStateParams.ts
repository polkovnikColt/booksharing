import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export const useStateParams = (userId= "0" , bookId = "0") => {
    const user = useSelector((store: RootState) => store.user);

    const parsedUserId = Number.parseInt(userId);
    const parsedBookId = Number.parseInt(bookId);

    const currentUser = user
        .allUsers
        .find(user => user.id === parsedUserId);

    const userBooks = user
        .allBooks
        .filter(book => book.user[0].id === parsedUserId);

    const currentBook = user
        .allBooks
        .find(book =>  book.id === parsedBookId);

    return {currentUser, userBooks,currentBook};
}