import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyOrders } from '../components/MyOrders/MyOrders';
import { fetchOrder } from '../redux/features/orders/ordersSlice';
import { CheckoutContainerStyled } from './OrdersElements';

const Orders = () => {
  const { currentUser } = useSelector((state) => state.user);
  let { orders } = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchOrders = useCallback(async () => {
    await dispatch(fetchOrder(currentUser.id));
  }, [dispatch, currentUser]);

  if (!currentUser) {
    navigate('/');
  }
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <CheckoutContainerStyled>
      <MyOrders orders={orders} />
    </CheckoutContainerStyled>
  );
};

export default Orders;
