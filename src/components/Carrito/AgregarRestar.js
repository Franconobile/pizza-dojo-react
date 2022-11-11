import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/features/cart/cartSlice';

const AgregaRestaContainer = styled.div`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);

  .RemoverIcon {
    width: 60px;
    height: 40px;
    padding: 10px;
    color: #FF6F11;
    cursor: pointer;
  }
`;

const AgregaRestaStyle = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const AgregaRestaBotones = styled.div`
  width: 23px;
  color: #FF6F11;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;


export const AgregarRestar = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <AgregaRestaContainer>
      {+item.quantity === 1 ? (
        <BsFillTrashFill
          onClick={() => dispatch(removeItem(item))}
          className="RemoverIcon"
        />
      ) : (
        <AgregaRestaBotones onClick={() => dispatch(removeItem(item))}>
          <BsFillTrashFill></BsFillTrashFill>
        </AgregaRestaBotones>
      )}
      <AgregaRestaStyle>{item.quantity}</AgregaRestaStyle>

      <AgregaRestaBotones onClick={() => dispatch(addItem(item))}>
        +
      </AgregaRestaBotones>
    </AgregaRestaContainer>
  );
};
