import styled from "styled-components";

export const ContactInfoWrapper = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px 100px;
    
    &after: {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg");
        background-size: cover;
        z-index: -1;
    }
    @media screen and (max-width:880px){
        padding: 0px;
    }
    .contact-box {
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #121619;
        box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
        color: #fff;
    }
    .izq {
        height: 100%;
        background: url("https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg") no-repeat center;
        background-size: cover;
    }
    .der {
        padding: 25px 40px;
    }
    h2 {
        position: relative;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    h2:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        height: 4px;
        width: 50px;
        border-radius: 2px;
        background-color: #FFA925;
    }
    .field {
        width: 100%;
        padding: 0.5rem 1rem;
        border: 2px solid rgba(0, 0, 0, 0);
        background-color: #fff;
        font-size: 1.1rem;
        margin-bottom:  22px;
        transition: .3s;
    }
    .field:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .field:focus {
        background-color: #fff;
        border: 2px solid rgba(30, 85, 250, 0.47);
    }
    .area {
        min-height: 150px;
        resize: none;
    }
    .sendBtn {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
        background-color: #FFA925;
        cursor: pointer;
        outline: none;
        border: none;
        transition: .3s;
    }
    .sendBtn:hover {
        background-color: #C97F0F;
    }
    @media screen and (max-width:880px){
        .contact-box {
            grid-template-columns: 1fr;
        }
        .izq {
            height: 200px;
        }
    }
`