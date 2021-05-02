import React from 'react';
import {LabelItem} from "./LabelItem";
import {Divider} from "antd";

type GreetingsPops = {
    isLogged: boolean
}

export const Greetings: React.FC<GreetingsPops> = ({isLogged}) => {
    return (
        <div className="p-3 greetings">
            {!isLogged ? <>
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
                </>
                : <Divider
                    orientation="center">
                    <h3>Рекомендації: </h3>
                </Divider>
            }

        </div>
    )
}