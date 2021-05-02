import React, {ChangeEvent, useState} from 'react';
import {UploadChangeParam} from "antd/es/upload";
import {UploadFile} from "antd/es/upload/interface";
import {ImageItem} from "../images/ImageItem";
import {useWidth} from "../../../hooks/useDimension";

type UploaderItemProps = {
    file: string
    uploadHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploaderItem: React.FC<UploaderItemProps> = (
    {
        file,
        uploadHandler
    }
) => {
    const width = useWidth(window.innerWidth);
    return (
        <div>
            <input type="file"
                   className="custom-file-input"
                   onChange={uploadHandler}
            />
            <ImageItem
                widthInPer={width < 500 ? 100 : 50}
                base64={file}/>
        </div>
    )
}