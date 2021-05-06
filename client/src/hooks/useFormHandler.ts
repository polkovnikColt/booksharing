import {ChangeEvent, useState} from 'react';
import imageCompression from "browser-image-compression";

const compressImage = async (file:File):Promise<File> => {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 300,
        useWebWorker: true
    }

    return await imageCompression(file, options);
}

export const useFormHandler = (initState,uploaderField:string = '') => {
    const [object, setObject] = useState(initState);

    const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = e.target.files && e.target.files[0];
        const fr = new FileReader();
        fr.onload = () => {
            setObject({...object, [uploaderField]: fr.result.toString()});
        }
        const compressedFile = await compressImage(fileUploaded);
        fr.readAsDataURL(compressedFile);
    }

    const changeHandler = (name: string, value: string): void => {
        setObject({...object, [name]: value});
    }

    const onSelect = (value:string) => {
        setObject(value);
    }

    const reload = (state = {}) => {
        setObject(state);
    }

    return {object, uploadHandler, changeHandler,reload, onSelect}
}
