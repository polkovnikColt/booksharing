import React, {useState} from 'react';
import {Button, Upload,} from "antd";
import {UploadOutlined} from "@ant-design/icons";


export const UploaderItem:React.FC = () => {

    const [fileList,setFileList] = useState([

    ]);

    return(
        <Upload
            onChange={() => {}}
            multiple={true}
            fileList={fileList}
        >
            <Button
                icon={<UploadOutlined />}>
                Upload
            </Button>
        </Upload>
    )
}