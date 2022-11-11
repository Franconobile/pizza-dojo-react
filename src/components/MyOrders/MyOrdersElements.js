import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-height: 100vh;
  z-index: 10;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const OrderHistory = styled.div`
  width: 50%;
  background-color: black;
  border-radius: 20px;
  padding: 30px;
  color: white;
  position: absolute;
  top: 30%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin-top: 100px;
`;

export const OrderTitle = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #FFA925;
  margin-bottom: 20px;
`;

export const OrderContent = styled.div`
  height: 200px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 30px;
  overflow: hidden;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const OrderDetails = styled.div`
  width: 100%;
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Status = styled.div`
  padding: 8px 18px;
  border-radius: 0 8px;
  text-align: center;

`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const OrderUl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const OrderLi = styled.p`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  zoom: 1;
  line-height: 1.7;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #7d7d7d;
`;

export const OrderSpan = styled.span`
  min-width: 50px;
  padding-right: 5px;
  display: inline-block;
  color: #332927;
`;

export const StatusContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
