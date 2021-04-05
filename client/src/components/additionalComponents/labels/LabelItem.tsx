import React from 'react';
import {Link} from "react-router-dom";
import './labels.styles.scss'

type LabelItemProps = {
    // text:string
    isLink: boolean
    path?: string

}

export const LabelItem: React.FC<LabelItemProps> = ({
// text,
isLink,
path,
children
}) => {
    return (
        <>
            {isLink ?
            <Link
                className="mx-2 link"
                to={path}>
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