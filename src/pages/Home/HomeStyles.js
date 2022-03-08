import styled from "styled-components";

//********************/
//Home - Pasta Home //
//***************** */

export const ContainerMain = styled.section`

  /* 1.0 Intervalo de configuração VERTICAL - AQUI 1 */
  @media screen and (max-width: 2300px) and (min-width: 999px) {
    align-items:center ;
    /* border: 12px solid #24292F; */
    border-radius: 15px;
    /* border-bottom: 10px solid #24292F; */
    /* border-bottom: 10px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 8px;
    margin-top: 12px;
    width: 98%;
    height: 83vh;
    
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
  justify-content: space-evenly;
  height:15vh ;
  width: 98%;
`;


export const HeaderInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px 105px 25px;
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

