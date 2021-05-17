import {BookInterface, FormDataInterface, PreferenceInterface, UserInterface} from "../../../types/types";
import {Input} from "antd";

export const rules: string[] = [
    'Оберіть книгу, що вам сподобалась',
    'Натисніть на обкладинку книги аби запросити її у власника',
    'Запропонуйте книгу на обмін',
    'Чекайте відповіді'
];

export const getBooksByPreference =
    (preference:PreferenceInterface, allBooks:BookInterface[]) => {
        return allBooks.filter(book => preference.genre.includes(book.genre)
        || preference.author.includes(book.author));
    }
