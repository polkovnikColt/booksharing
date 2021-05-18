import React from 'react';
import './image.styles.scss';

type ImageItemProps = {
    base64: string
    label?: string
    isOrdered?: boolean,
    widthInPer: number
}

export const ImageItem: React.FC<ImageItemProps> = (
    {
        base64,
        label,
        isOrdered,
        widthInPer
    }
) => {
    return (
        <div className={isOrdered ? "image-item-disabled" : "image-item-active"}>
            {base64 &&
                <img
                    style={{width: widthInPer + "%"}}
                    src={base64}
                    alt={label}
                />
           }
            {label && isOrdered &&
            <span>
                {label}
            </span>
            }
        </div>
    )
}