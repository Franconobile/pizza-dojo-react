import styled from "styled-components";

export const NavWrapper = styled.nav`
    background-color: #121619;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 0px 30px;
    position: fixed;
    top: 0;

    
    h2 {
        font-weight: 400;
        color: #fff;
        font-size: 1rem;
        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      #logo {
        width: 50px;
        padding-left: 20px;
      }

      #logo:hover {
        transform: rotate(90deg);
        transition: 1s ease;
      }

      a {
        color: #fff;
        text-decoration: none;
        margin-right: 1rem;
      }
      .burger {
        @media (min-width: 768px) {
          display: none;
        }
      }
      .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin: auto;
        text-align: center;
        transition: all 0.6s ease;
        a {
          color: #fff;
          font-size: 2rem;
          display: block;
          transition: all .3s;
          &:hover{
            text-shadow: 0 0 0.8em #02b3ab;
        }
        }
        
        @media (min-width: 768px) {
          position: initial;
          margin: 0;
          a {
            font-size: 1rem;
            color: white;
            display: inline;
          }
          display: block;
        }
      }

`