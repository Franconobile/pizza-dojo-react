import styled from "styled-components";

export const NavWrapper = styled.div`
background-color: #121619;
display: flex;
flex-direction: row;
justify-content: space-between;
z-index: 2;
align-items: center;
width: 100%;
height: 65px;
position: fixed;
top: 0;

#logo {
    width: 70px;
    padding-left: 20px;
    margin-left: 10px;
    transition: transform .7s ease-in-out;
  }

  #logo:hover {
    transform: rotate(90deg);
  }

  a {
    color: #999387;
    text-decoration: none;
    margin-right: 1rem;
    padding-right: 1.5rem;
    font-weight: 800;
    font-size: 16px;
    word-spacing: 2px;
  }

  a:hover {
    color: #CA8C35;

    

`;



export const User = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 2rem;
  cursor: pointer;
`;

export const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
  height: 25px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-family: 'Poppins-SemiBold', Helvetica, Arial, sans-serif;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

export const NavbarElements = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;