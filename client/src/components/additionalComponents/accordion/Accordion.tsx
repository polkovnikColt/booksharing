import React from 'react';
import {Collapse} from "antd";
import './accordion.styles.scss'

const {Panel} = Collapse;

type AccordionProps = {
    key: string,
    header: string,
}

export const Accordion: React.FC<AccordionProps> = (
    {
        children,
        header,
        key
    }
) => {
    return (
        <Collapse defaultActiveKey={[key]}>
            <Panel header={header} key={key}>
                {children}
            </Panel>
        </Collapse>
    )
}