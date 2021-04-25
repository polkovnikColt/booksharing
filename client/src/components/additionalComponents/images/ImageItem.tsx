import React from 'react';
import './image.styles.scss';

type ImageItemProps = {
    base64: string
    label?: string
    widthInPer: number
}

export const ImageItem: React.FC<ImageItemProps> = ({base64, label, widthInPer}) => {
    return (
        <div className = "image-item">
            {base64 &&
            <img
                style={{width:widthInPer + "%"}}
                src={base64}
                alt={label}
            />}
            {label &&
            <span>
                {label}
            </span>
            }
        </div>
    )
}