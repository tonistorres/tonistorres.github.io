import styled from "styled-components";

export const ContainerMap = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1500px) {
  background-color: #999;
  background-color:whitesmoke ;
  border-radius: 5px 75px 5px;
  display: flex;
  height:100% ;
  justify-content:center ;
  overflow: scroll;
  overflow-x: hidden;
  width:100% ;

     td {
    font-size: 16px;
    letter-spacing:2px ;
    text-align: center;
    padding-top:2.5px;
    } 

  ::-webkit-scrollbar{
    width:25px;
    border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-track{
    background-color:#395C79;
    border-radius:5px 175px 5px;
    width:20px;

  }

  ::-webkit-scrollbar-thumb{
      background-color:#657A70;
      border-radius:5px 175px 5px;
  }


  ::-webkit-scrollbar-thumb:hover{
      background-color:#50A0A9;
      border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-button{
      background-color:#50A0A9;
      padding:2px 2px ;
      border-radius:15px 55px 5px;
  }

  }

`;































export const TitleMap = styled.h3`
  background: rgba(255, 255, 255, 0.95);
  color: #555;
  display: flex;
  justify-content: center;
`;
