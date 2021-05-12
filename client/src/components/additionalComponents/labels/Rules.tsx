import React from 'react';
import {List} from "antd";
import '../../mainStyles.scss';

type RulesType = {
    header?:string
    footer?: string
    rules: string[]
}

export const Rules: React.FC<RulesType> = (
    {rules,
        header,
        footer
    }
    ) => {
    return (
        <List
            header={<h2>{header}</h2>}
            footer={<h3>{footer}</h3>}
            bordered
            dataSource={rules}
            renderItem={(item, index) => (
                <List.Item>
                    <span
                        className="bold"
                    >
                        {(index + 1) + '. '}
                    </span>
                    {item}
                </List.Item>
            )}
        />
    )
}