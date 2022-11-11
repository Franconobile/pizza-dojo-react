import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

 const StyledButton = styled(motion.button)`
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

const Button = ({
  children,
  radius = '32',
  secondary,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      radius={radius}

    >
      {children}
    </StyledButton>
  );
};

export default Button;