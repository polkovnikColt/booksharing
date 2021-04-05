import React from 'react';

type ImageItemProps = {
    src: string
    label?: string
}

export const ImageItem: React.FC<ImageItemProps> = ({src, label}) => {
    return (
        <div>
            <img src={src} alt={label}/>
            {label &&
            <span>
                {label}
            </span>
            }
        </div>
    )
}