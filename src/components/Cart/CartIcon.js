import styled from 'styled-components';
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/features/cart/cartSlice';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  );

  return (
    <CartIconStyled onClick={() => dispatch(toggleCartHidden())}>
      <BsCartFill style={{ width: '24px', height: '24px', color: "#999387" }} />
      <ItemCount style={{fontSize: "1.1rem",color:"#FFA925", marginRight: "2.5rem"}}>{quantity}</ItemCount>
    </CartIconStyled>
  );
};
