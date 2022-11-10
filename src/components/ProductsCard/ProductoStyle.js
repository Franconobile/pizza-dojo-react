import styled from "styled-components";

export const CategoriasWrapper = styled.section`

`;

export const ProductosWrapper = styled.section`
  padding-top: 1rem;
  background: black;
`;

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3rem;
  width: 100%;
  padding: 1rem 0;
`;

export const ProductosCard = styled.div`
  background: black;
  width: 350px;
  padding: 1rem;
  border-radius: 15px;
  background: #171717;

  img {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #FFA925;
    font-weight: 600;
    margin: ;
  }
  p {
    color: gray;
    font-size: 1.2rem;
    margin: 1.5rem 0;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.span`
  font-size: 1.5rem;
  color: #DA5C24;
  font-weight: bold;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;