import styled from "styled-components";

const Spinner = styled.div`
  border: 10px solid yellow;
  border-top: 10px black solid;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 2s linear infinite; */
  position: relative;
  top: -0.1em;
  left: 11em;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerForm = () => {
    return (
        <Spinner />
    );
  };
