import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from '../UI';
import { formatDate, formatprice } from '../../Utils';

import {
  Container,
  OrderHistory,
  Wrapper,
  OrderTitle,
  OrderContent,
  OrderDetails,
  OrderUl,
  OrderLi,
  OrderSpan,
  Flex,
  Status,
  StatusContainerStyled,
} from './MyOrdersElements';

export const MyOrders = ({ orders }) => {
  let url = useLocation().pathname;

  return (
    <Container>
      <OrderHistory>
        <Wrapper>
          <OrderTitle>
            <h2>Historial de pedidos </h2>
            <p>
              Realiza el seguimiento de tu pedido.
            </p>
          </OrderTitle>

          <div>
            {orders.map((order) => (
              <OrderContent key={order.id}>
                <OrderDetails>
                  <OrderUl>
                    <OrderLi>
                      <OrderSpan>Fecha:</OrderSpan>
                      {formatDate(new Date(order.createdAt.seconds))}
                    </OrderLi>
                    <OrderLi>
                      <OrderSpan>Total:</OrderSpan>
                      {formatprice(order.total)}
                    </OrderLi>
                  </OrderUl>
                  <StatusContainerStyled>
                    <Status type={order.status}>{order.status}</Status>
                  </StatusContainerStyled>
                  <Flex>
                    <Link to={`${url}/${order.id}`}>
                      <CustomButton w="150px" m="0">
                        Ver resumen
                      </CustomButton>
                    </Link>
                  </Flex>
                </OrderDetails>
              </OrderContent>
            ))}
          </div>
        </Wrapper>
      </OrderHistory>
    </Container>
  );
};
