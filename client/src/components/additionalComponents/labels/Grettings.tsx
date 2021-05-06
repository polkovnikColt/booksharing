import React from 'react';
import {LabelItem} from "./LabelItem";
import {Divider} from "antd";


export const Greetings: React.FC = () => {
    return (
        <div className="p-3 greetings">
                    <h4>Перед початком роботи, просимо вас ознайомитись з
                        <LabelItem

                            isLink={true}
                            path={'/rules'}>
                            Правилами
                        </LabelItem>
                        нашого порталу
                    </h4>
                    <h4>Ще не маете аккаунту? Саме час його
                        <LabelItem isLink={true} path={'/registration'}>створити!</LabelItem>
                        </h4>
        </div>
    )
}