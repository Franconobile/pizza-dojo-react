import styled from "styled-components";
import { motion } from 'framer-motion';

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

export const ProductoCard = styled.div`
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

  .cardItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: black;
    width: 350px;
    padding: 1rem;
    border-radius: 15px;
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


export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 150px;
  padding: 2rem 0.5rem;
  cursor: pointer;
  h2 {
    font-size: 1rem;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

