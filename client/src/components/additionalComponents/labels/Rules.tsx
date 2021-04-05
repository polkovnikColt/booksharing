import React from 'react';
import {List} from "antd";
import '../../mainStyles.scss';

type RulesType = {
    rules: string[]
}

export const Rules: React.FC<RulesType> = ({rules}) => {
    return (
        <List
            header={<h2>Правила сайту</h2>}
            footer={<h3>Виникло запитання? Зверніться до адміністрації</h3>}
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