import styled from "styled-components";

export const NavWrapper = styled.nav`
    background-color: #121619;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;

      #logo {
        width: 70px;
        padding-left: 20px;
        margin-left: 10px;
      }

      #logo:hover {
        transform: rotate(90deg);
        transition: 1s ease;
      }
      
      a {
        color: var(--text-color-2);
        text-decoration: none;
        margin-right: 1rem;
        padding-right: 1.5rem;
        font-weight: 800;
        font-size: 16px;
        word-spacing: 2px;
      }
    
      .navbar_elements a:hover {
        color: #CA8C35;
    }

    .burger {
      @media(min-width: 768px){
        display: none;
      }
    }

    .links {
      position: absolute;
      top: -700px;
      right: -2000px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      a {
        color: var(--text-color-2);
        font-size: 2rem;
        display: block;
      }
      @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          color: var(--text-color-2);
          display: inline;
        }
        display: block;
      }
    }

    .links.active {
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 200%;
      left: 20%;
      right: 0;
      text-align: center;

      a {
        margin-top: 2rem;
        color: var(--text-color-2);
      }
    }
`

export const BgDiv = styled.div`
    position: absolute;
    background-color: #121619;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    


    &.active {
      border-radius: 0 0 0 80%;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

`