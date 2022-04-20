import styled, { keyframes } from "styled-components";

export const ContainerRedeSociais = styled.section`

  @media screen and (max-width: 2300px) and (min-width: 1500px) {
    align-items: center;
    background-color: #509FA9;
    bottom: 1px;
    color: #f5f5f5;
    display: flex;
    height: 37px;
    justify-content: space-between;
    left: 0px;
    margin: 0 10px;
    margin-bottom: 0px;
    position: fixed;
    right: 0px;
    width: 100%;
  }

  @media screen and (max-width: 1499px) and (min-width: 1px) {
    display:none;
  }
`;
export const SpanMensagemInformativa =styled.span `
animation: ${(props) => props.BorderKeyFumcaInformativa} 12s ease infinite;
align-items: center;
background-color: #509FA9;
border-radius: 15px;
color:#333;
display: flex;
font-size: 30px;
font-weight: 500;
height: 5vh;
justify-content: center;
margin-bottom: 8px;
margin-right: 28px;
margin-left: 40px;
/* border: 2px solid yellow; */
width: 100%;
`;

export const BorderKeyFumcaInformativa = keyframes`
  0%{
    border-radius: 15px;
    background: #509FA9;
    color:#333;
    box-shadow:0 0 30px #ffff52;

  }

  10%{
    border-radius: 20px;
    background: #509FA9;
    color:#333;
    box-shadow:0 0 40px #ffff52;
  }


  20%{
    background: #509FA9;
    border-radius: 25px;
    color:#333;
    box-shadow:0 0 50px #ffff52;
  }


  30%{
    background: #509FA9;
    border-radius: 45px;
    color:#333;
    box-shadow:0 0 60px #ffff52;
  }

  40%{
    background: #509FA9;
    border-radius: 45px;
    color:#333;
    box-shadow:0 0 70px #ffff52;
  }


  50%{
    background: #509FA9;
    border-radius: 45px;
    color:#333;
    box-shadow:0 0 80px #ffff52;
  }

  60%{
    background: #509FA9;
    border-radius: 40px;
    color:#333;
    box-shadow:0 0 90px #ffff52;
  }


  70%{
    background: #509FA9;
    border-radius: 35px;
    color:#333;
    box-shadow:0 0 100px #ffff52;
  }


  80%{
    background: #509FA9;
    border-radius: 25px;
    color:#333;
    box-shadow:0 0 110px #ffff52;
  }


  90%{
    background: #509FA9;
    border-radius: 20px;
    color:#333;
    box-shadow:0 0 120px #ffff52;
  }

  100%{
    background: #509FA9;
    border-radius: 10px;
    color:#333;
    box-shadow:0 0 19px #333;
  }

`
