import styled from "styled-components";

//********************/
//Home - Pasta Home //
//***************** */

export const ContainerMain = styled.section`

  /* 1.0 Intervalo de configuração VERTICAL */
  @media screen and (max-width: 2300px) and (min-width: 999px) {
    border: 2px solid #24292F;
    border-radius: 15px;
    border-bottom: 10px solid #24292F;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 12px;
    margin-top: 12px;
    width: 98%;
    height: 85vh;
    
  }
  /* 1.1 Intervalo de configuração VERTICAL */
  @media screen and (max-width: 998px) and (min-width: 840px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 12px;
    margin-top: 72px;
    width: 97%;
    height: 77vh;
    overflow: auto;
  }
  /* 1.2 Intervalo de configuração VERTICAL */
  @media screen and (max-width: 839px) and (min-width: 600px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 77vh;
    overflow: auto;
  }

  /* 1.3 Intervalo de configuração VERTICAL */
  @media screen and (max-width: 599px) and (min-width: 398px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 12px;
    margin-top: 12px;
    width: 94%;
    height: 84vh;
    overflow: auto;
  }

  /* 1.4 Intervalo de configuração VERTICAL - Comtempla Dipositivo G4 na Horizontal */
  @media screen and (max-width: 397px) and (min-width: 265px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 3px;
    margin-top: 5px;
    width: 94%;
    height: 74vh;
    overflow: auto;
  }

  /* 1.5 Intervalo de configuração VERTICAL */
  @media screen and (max-width: 264px) and (min-width: 135px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 5px;
    margin-top: 5px;
    width: 94%;
    height: 75vh;
    overflow: auto;
  }

  /* 1.6 DISPOSITIVOS G4 na VERTICAL */
  @media screen and (width: 640px) and (height: 360px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 18px;
    margin-top: 70px;
    width: 94%;
    height: 44vh;
    overflow: auto;
  }

  /* 1.7 Dispositvo Pixe2 Horizontal */
  @media screen and (width: 411px) and (height: 731px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 5px;
    width: 94%;
    height: 82vh;
    overflow: auto;
  }

  /* 1.7.1 Dispositvo Pixe2 vertical */
  @media screen and (width: 731px) and (height: 411px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 62px;
    width: 96%;
    height: 52vh;
    overflow: auto;
  }
  /* 1.8 Dispositivo Pixel2 XL  Horizontal*/
  @media screen and (width: 411px) and (height: 823px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 3px;
    margin-top: 3px;
    width: 94%;
    height: 84vh;
    overflow: auto;
  }

  /* 1.8.1 Dispositivo Pixel2 XL  Vertical*/
  @media screen and (width: 823px) and (height: 411px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #777;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 52vh;
    overflow: auto;
  }

  /* 1.9 Dispositivo iPhone5/SE Horizontal */
  @media screen and (width: 320px) and (height: 568px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 3px;
    margin-top: 5px;
    width: 94%;
    height: 76vh;
    overflow: auto;
  }

  /* 1.9 Dispositivo iPhone5/SE Vertical */
  @media screen and (width: 568px) and (height: 320px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 12px;
    width: 94%;
    height: 56vh;
    overflow: auto;
  }

  /*2.0 Dispositivo iPhone 6/7/8 Horizontal */
  @media screen and (width: 375px) and (height: 667px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 5px;
    width: 94%;
    height: 79vh;
    overflow: auto;
  }

  /*2.1 Dispositivo iPhone 6/7/8 Vertical */
  @media screen and (width: 667px) and (height: 375px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 47vh;
    overflow: auto;
  }
  /* 3.0 Dispositivo iPhone 6/7/8 PLUS Horizontal */
  @media screen and (width: 414px) and (height: 736px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 12px;
    width: 94%;
    height: 80vh;
    overflow: auto;
  }

  /* 3.1 Dispositivo iPhone 6/7/8 PLUS Vertical */
  @media screen and (width: 736px) and (height: 414px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 49vh;
    overflow: auto;
  }

  /* 4.0 Dispositivo iPhone X Horizontal */
  @media screen and (width: 375px) and (height: 812px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 12px;
    width: 94%;
    height: 83vh;
    overflow: auto;
  }

  /* 4.1 Dispositivo iPhone X Vertical */
  @media screen and (width: 812px) and (height: 375px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 47vh;
    overflow: auto;
  }

  /* 5.0 Dispositivo iPad Vertical */
  @media screen and (width: 1024px) and (height: 768px) {
    border: 2px solid #1877f2;
    border-radius: 15px;
    border-bottom: 10px solid #1877f2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 12px;
    width: 98%;
    height: 82vh;
    overflow: auto;
  }

  /* 6.0 iPad Pro Horizontal */
  @media screen and (width: 1024px) and (height: 1366px) {
    border: 2px solid #1877f2;
    border-radius: 15px;
    border-bottom: 10px solid #1877f2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 12px;
    width: 98%;
    height: 88vh;
    overflow: auto;
  }

  /* 7.0 Surface Duo Horizontal */
  @media screen and (width: 540px) and (height: 720px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 5px;
    width: 96%;
    height: 80vh;
    overflow: auto;
  }

  /* 7.1 Surface Duo Vertical */
  @media screen and (width: 720px) and (height: 540px) {
    border: 2px solid #777;
    border-radius: 15px;
    border-bottom: 10px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 97%;
    height: 63vh;
    overflow: auto;
  }

  /* 8.0 Galaxy Fold Vertical */
  @media screen and (width: 653px) and (height: 280px) {
    border: 2px solid #e4405f;
    border-radius: 15px;
    border-bottom: 10px solid #e4405f;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 12px;
    margin-top: 72px;
    width: 96%;
    height: 44vh;
    overflow: auto;
  }
`;

export const ContaineRepoGitHub = styled.section`
  align-items: centers;
  background-color: #24292F;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: center;
  margin-top: 3%;
  margin-left: 1%;
  margin-right:1%;
  width: 100%;
  
`;

export const HeaderTitle = styled.h1`
  color: #f3f3f3;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  width: 60%;
  /* border: 2px solid yellow; */
`;
export const HeaderInputContainer = styled.div`
  align-items: center;
  background-color: #24292F;
  /* border: 2px solid yellowgreen; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height:15vh ;
  width: 98%;
`;

export const HeaderInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: none;
  padding: 0 16px;
  color: #ff7a00;
  font-size: 15px;
  font-weight: 200;
  transition: 0.4s ease;
  text-align: center;

  &:focus {
    outline: none;
    width: 220px;
    transition: 0.4s eas100
    }
`;

export const HeaderSearchButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #fff;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #24292F;
  /* transition: ease 0.3s; */

  &:hover {
    /* transform: scale(1.05);
    transition: ease 0.3s; */
    cursor: pointer;
    border:1px solid #24292F;
    box-shadow: 0 0 10px #999;

  }
`;

export const ContainerColumnMain = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;

