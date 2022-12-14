import { useReducer, useEffect } from 'react';
import { validate } from '../../Utils';
import styled, { css } from 'styled-components';

const CHANGE = 'CHANGE';
const TOUCH = 'TOUCH';

const FormControl = styled.div`
  margin: 1rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  background-color: white;
  border-radius: 15px;
  font-size: 16px;
  color: #7d7d7d;
  padding: 4px 0;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  &:focus {
    background-color: #ffffff;
    outline-width: 0;
  }
  ${({ showError }) =>
    showError
      ? css`
          border-color: red;
          background: #FFDAC3;
        `
      : null}
`;


const StyledIpunt = styled.input`
  width: 100%;
  font: inherit;
  border: none;
  font-size: 1.2rem;
  caret-color: white;
  padding: 1rem;
  border-radius: 15px;
  background-color: transparent;
  height: 25px;
  padding: 0.15rem 0.35rem;
  display: block;
  color: black;
  &:focus {
    outline: none;
    background-color: transparent;
    border-color: black;
  }
`;

const StyledLabel = styled.div`
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 0.5rem;
  ${({ showError }) => (showError ? `color: red;` : null)}
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case TOUCH:
      return {
        ...state,
        isTouch: true,
      };

    default:
      return state;
  }
};

const ErrorText = styled.p`
  color: red;
  padding: 4px 0;
  margin: 0 16px;
`;

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouch: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: CHANGE,
      val: event.target.value,
      validators: props.validators,
    });
  };

  const toucheHandler = (event) => {
    dispatch({
      type: TOUCH,
    });
  };

  return (
    <FormControl>
      <StyledLabel
        htmlFor={props.id}
        showError={!inputState.isValid && inputState.isTouch}
      >
        {props.label}
      </StyledLabel>
      <InputContainer showError={!inputState.isValid && inputState.isTouch}>
        <StyledIpunt
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={toucheHandler}
          value={inputState.value}
          showError={!inputState.isValid && inputState.isTouch}
        />
      </InputContainer>

      {!inputState.isValid && inputState.isTouch && (
        <ErrorText>{props.errorText}</ErrorText>
      )}
    </FormControl>
  );
};
