import styled from 'styled-components';
import {  formatprice } from '../../Utils';
import { CustomButton } from '../UI';

export const CardContainer = styled.div`
  max-width: 100%;
  width: 100%;

`;

export const CardSummaryStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
`;

export const CardSummaryContent = styled.div`
  padding: 24px 32px 15px;
  background-color: #0D0D0D;
`;

export const UlCard = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #9faab7;
  margin-bottom: 15px;
`;

export const RowCard = styled.hr`

`;

export const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CardSummary = ({ isValid, envio, subTotal }) => {
  return (
    <CardContainer>
      <CardSummaryStyled>
        <CardSummaryContent>
          <UlCard>
            <LiCard>
              <p>Costo de productos</p>
              <span>{formatprice(subTotal)}</span>
            </LiCard>
            <LiCard>
              <p>Costo de envío</p>
              <span>{formatprice(envio)}</span>
            </LiCard>
          </UlCard>
          <RowCard />
          <TotalCard>
            <h4>Total</h4>
            <h4>{formatprice(envio + subTotal)}</h4>
          </TotalCard>
          <CustomButton w="100%" m="0px" disabled={isValid}>
            Pagar
          </CustomButton>
        </CardSummaryContent>
      </CardSummaryStyled>
    </CardContainer>
  );
};
