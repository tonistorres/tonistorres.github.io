import styled from "styled-components";

//********************/
//Home - Pasta Home //
//***************** */

export const ContainerMain = styled.section`

  /* 1.0 Intervalo de configuração VERTICAL - AQUI 1 */
  @media screen and (max-width: 2300px) and (min-width: 999px) {
    align-items:center ;
    border :5px solid red ;
    border-radius: 15px;
    background-color:#999;
    display: flex;
    flex-direction: column;
    height:98vh;
    justify-content: center;
    margin-left:5px ;
    width: 99vw;       
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


/**Container GitHub - Div Principal  */
export const HeaderInputContainer = styled.div`
  align-items: center;
  background-color: #24292F;
  border: 8px solid yellow;
  border-radius:5px 175px 5px ;
  display: flex;
  flex-direction: row;
  height:17vh ;
  width: 98%;
`;


export const HeaderInput = styled.input`
    
  background-color:yellow ;
  border-radius: 5px 105px 25px;
  border: none;
  color: #24292F;
  font-size: 19px;
  font-weight: 500;
  height: 60px;
  padding: 0 16px;
  transition: 0.4s ease;
  text-align: center;
  width: 100%;

  &:focus {
    outline: none;
    transition: 0.4s eas100;
    width: 95%;
    }
`;

export const HeaderSearchButton = styled.button`
  width: 40%;
  height:50%;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #24292F;
  
`;

export const ContainerColumnMain = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;

export const DivLoad = styled.div `
display:flex ;
align-items:center;
justify-content:center;
/* border:2px solid black ; */
/* background-color:yellow ; */
width:50% ;
`; 


export const DivInput = styled.div `
display:flex ;
align-items:center;
justify-content:center;
/* border:2px solid yellowgreen ; */
/* border-radius: 5px 105px 15px ; */
/* background-color:yellow   ; */
width:140% ;
`; 


export const DivButton = styled.div `
display:flex ;
align-items:center ;
justify-content:center;
/* border:2px solid yellowgreen ; */
/* background-color: burlywood  ; */
width:50% ;
`; 

export const DivImgGitPerfil = styled.div `
display:flex ;
align-items:center ;
justify-content:center;
/* border:2px solid yellowgreen ; */
/* background-color: burlywood  ; */
width:50% ;
`; 

export const DivAgrega = styled.div `
display:flex ;
/* border:5px solid blue ; */
/* border-radius: 5px 105px 25px; */
/* background-color:yellow ; */
width:100% ;
`; 