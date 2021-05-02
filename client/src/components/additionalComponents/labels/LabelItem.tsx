import React from 'react';
import {Link} from "react-router-dom";
import './labels.styles.scss'

type LabelItemProps = {
    isLink: boolean
    color?:string
    path?: string

}

export const LabelItem: React.FC<LabelItemProps> = ({
color,
isLink,
path,
children
}) => {
    return (
        <>
            {isLink ?
            <Link
                className="mx-2 link"
                to={path}
                style={{color: color + ""}}
            >
                {children}
            </Link>
            :
            <span
                className="mx-2">
                    {children}
            </span>
        }
        </>
    )
}