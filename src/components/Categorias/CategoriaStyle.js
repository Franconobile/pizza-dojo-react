import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  color: white;
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
