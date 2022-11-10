import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: #E78511;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    opacity: 95%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #B12121;
      & span {
        background: #B12121;
      }
    `}
`;