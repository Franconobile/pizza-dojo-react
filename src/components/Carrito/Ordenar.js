import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatprice } from '../../Utils';
import { toggleCartHidden } from '../../redux/features/cart/cartSlice';
import {
  PopupContent,
  PopupFooter,
  BtnConfirm,
  PopupShadow,
} from '../PopupPedido/PopupPedido';
import { AgregarRestar } from './AgregarRestar';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 340px;
  background-color: #1E1D1D;
  height: calc(100% - 93px);
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition-property: transform;
  transition-duration: 0.5s;
`;

const OrderContent = styled(PopupContent)`
  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid #FFC211;
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const Ordernar = () => {
  const { hidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();

  const handlerToggle = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <>
      {hidden && <PopupShadow onClick={handlerToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>
            ¡Agregá algo al carrito che!
            <img src='https://images.vexels.com/media/users/3/190242/isolated/preview/a865ab8bd0229080d9df607876ebbf16-flat-kawaii-pizza.png' style={{height: "150px", width: "150px"}}></img>
          </OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>
            {cartItems.map((item) => (
              <OrderContainer key={item.id}>
                <OrderItem>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatprice(item.price * item.quantity)}
                  </div>
                  <div>
                    <AgregarRestar item={item} />
                  </div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <PopupFooter>
          <Link to="/checkout" onClick={handlerToggle}>
            <BtnConfirm>Comprar {formatprice(total)}</BtnConfirm>
          </Link>
        </PopupFooter>
      </OrderStyled>
    </>
  );
};
