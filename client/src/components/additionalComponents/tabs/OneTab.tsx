import React from 'react';

type OneTabProps = {}

export const OneTab: React.FC<OneTabProps> =
    ({
         children,
     }) => {
        return (
            <div className="tab-content">
                   {children}
            </div>
        )
    }