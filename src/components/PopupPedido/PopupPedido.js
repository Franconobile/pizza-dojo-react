import styled from 'styled-components';
import { formatprice } from '../../Utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/features/cart/cartSlice';

const PopupContainer = styled.div`
  width: 600px;
  background-color: black;
  position: fixed;
  top: 150px;
  z-index: 10;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  h3 {
    color: #EC8834;
  }

  p {
    color: #FFD4B0;
    font-style: italic;
  }

  span {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const PopupImg = styled.div`
  min-height: 170px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
`;


export const PopupShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 9;
`;

export const PopupContent = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 20px;
`;

export const PopupFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: relative;
bottom: 30px;
`;

export const BtnConfirm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;
  border-radius: 8px;
  width: 200px;
  cursor: pointer;
  background-color: #E88D01;
`;

const FoodDialogContainer = ({ abrirPopup, setAbrirPopup }) => {
  const dispatch = useDispatch();

  const handlerClose = () => {
    setAbrirPopup();
  };

  const addToOrder = () => {
    dispatch(addItem(abrirPopup));
    handlerClose();
  };
  return (
    <>
      <PopupShadow onClick={handlerClose} />
      <PopupContainer>
        <PopupImg img={abrirPopup.img} />
        <PopupContent>
          <h3>{abrirPopup.name}</h3>
          <p className='infoComida'>{abrirPopup.info}</p>
          <span>¿Queres agregarlo a tu pedido?</span>
        </PopupContent>
        <PopupFooter>
          <BtnConfirm onClick={addToOrder}>
            Agregar: {formatprice(abrirPopup.price)}
          </BtnConfirm>
        </PopupFooter>
      </PopupContainer>
    </>
  );
};

export const PopupPedido = (props) => {
  if (!props.abrirPopup) return null;
  return <FoodDialogContainer {...props} />;
};
