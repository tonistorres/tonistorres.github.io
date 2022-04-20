import styled from "styled-components";


export const ContainerMain = styled.section`
  @media screen and (max-width: 2300px) and (min-width: 1550px) {
    align-items:center ;
    /* background-color:red ; */
    /* border :5px solid #509FA9 ; */
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height:98vh;
    justify-content: center;
    margin-left:5px ;
    width: 99%;       
  }

  @media screen and (max-width: 1549px) and (min-width: 800px) {
    align-items:center ;
    /* background-color:yellow ; */
    /* border :5px solid #509FA9 ; */
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height:98vh;
    justify-content: center;
    margin-left:5px ;
    width: 99%;       
  }

  @media screen and (max-width: 799px) and (min-width: 1px) {
    
    display: none;
    
  }
`;
