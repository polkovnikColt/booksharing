import React from 'react';
import {Col, Row} from "antd";
import {OrderCard} from "../../../../components/additionalComponents/order/OrderCard";
import {findBookById} from "../service";
import {BookInterface, OrderBookInterface} from "../../../../types/types";
import {ButtonManipulate} from "../../../../components/additionalComponents/manipulators/ButtonManipulate";

type AllOrdersProps = {
    orders: OrderBookInterface[]
    allBooks: BookInterface[]
    dispatchFunctions: any[1 | 2]
}

export const AllOrders: React.FC<AllOrdersProps> = (
    {
        orders,
        allBooks,
        dispatchFunctions
    }) => {

    return (
        <Row>
            <Col span={17}>
                {orders.map(order => (
                    <>
                        <OrderCard
                            isFinished={order.isFinished}
                            userName={order.user[0].name}
                            userId={order.user[0].id}
                            avatar={order.user[0].avatar}
                            bookSendName={findBookById(allBooks, order.bookSendId)}
                            bookGetName={findBookById(allBooks, order.bookGetId)}
                        />
                        {!order.isFinished &&
                        <ButtonManipulate
                            dispatchFunction={dispatchFunctions[0]}
                            object={order}
                            text="Видалити"
                            type="delete"
                        />}
                        {dispatchFunctions.length > 1
                        && !order.isFinished
                        && <ButtonManipulate
                            dispatchFunction={dispatchFunctions[1]}
                            object={order}
                            text="Прийняти"
                            type="update"
                        />
                        }
                    </>
                ))}
            </Col>
        </Row>
    )
}