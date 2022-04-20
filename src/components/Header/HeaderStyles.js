import styled from "styled-components";

export const ContainerMain = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
    /* background-color:red ; */
    display: flex;
    position: fixed;
    height: 69px;
    justify-content: center;
    top: 1px;
    width: 100%;
  }

  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
    background-color:green ;
    align-items: center;
    display: flex;
    height: 69px;
    justify-content: center;
    width: 100%;
  }

  /* 3º Intervalo de configuração WDTH */
  @media screen and (max-width: 700px) and (min-width: 280px) {
    align-items: center;
    display: flex;
    height: 69px;
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerNavBar = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
    display: flex;
    height: 70px;
    justify-content: space-between;
    width: 100%;
  }
  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    width: 100%;
  }

  /* 3º Intervalo de configuração WDTH */
  @media screen and (max-width: 700px) and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ContainerLista = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1540px) {
    align-items: center;
    background-color: #509FA9;
    color: #f5f5f5;
    font-size: 28px;
    display: flex;
    justify-content: space-around;
    width: 48%;
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 15px;
    a:link,
    a:visited {
      text-decoration: none;
      color:#f5f5f5 ;
    }
    a:hover {
      text-decoration: underline;
      color: #f00;
    }
    a:active {
      text-decoration: none;
    }
  }
  
  @media screen and (max-width: 1539px) and (min-width: 1px) {
    
    display: none;
    
    }
  
  
`;

export const ContainerLogo = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1150px) {
    align-items: center;
    background-color: #f5f5f5;
    color: #777;
    display: flex;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    /* border: 1px solid black; */
    img {
      width: 50px;
      height: 50px;
    }
  }


  @media screen and (max-width: 1149px) and (min-width: 1000px) {
    align-items: center;
    background-color: #f5f5f5;
    color: #777;
    display: flex;
    justify-content: space-around;
    height: 70px;
    width: 90%;
    img {
      width: 50px;
      height: 50px;
    }
  }

`;
