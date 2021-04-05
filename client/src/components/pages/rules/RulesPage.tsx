import React from 'react';
import {Rules} from "../../additionalComponents/labels/Rules";
import {rules} from "./additional/service";
import {Layout} from "antd";

const {Content} = Layout;

export const RulesPage: React.FC = () => {
    return (
        <Content style={{minHeight: window.innerHeight}}>
            <Rules
                rules={rules}
            />
        </Content>
    )
}