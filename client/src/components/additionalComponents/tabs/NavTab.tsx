import React, {useState} from 'react';
import './tabs.styles.scss'
import {ArrowDownOutlined} from '@ant-design/icons';
import {Badge} from "antd";
import {useWidth} from "../../../hooks/useDimension";

type NavTabProps = {
    items: { title:string, counter:number }[]
}

export const NavTab: React.FC<NavTabProps> = ({
children,
items
}) => {

    const [active, setActive] = useState(0);

    const openTab = (e) => setActive(+e.target.dataset.index)

    return (
        <div className="w-100">
            <div className="nav-tabs">
                    {items.map((item,
                                index) => (
                        <Badge count={item.counter}>
                        <div
                            className="one-tab"
                            onClick={openTab}
                            data-index={index}
                        >
                             {item.title}
                        </div>
                        </Badge>
                    ))}
            </div>
            {items[active] && [children][0][active]}
        </div>
    )

}