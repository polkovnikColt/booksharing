import React from 'react';
import './wrappers.styles.scss'

export const ColumnWrapper:React.FC = ({children}) => {
    return (
        <div className = "column-wrapper">
            {children}
        </div>
    )
}