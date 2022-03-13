import styled from "styled-components";
//*************************************/
//Max 30 Repo GitHub - ListComponent //
//***********************************/
export const ContainerMap = styled.div`
  
  background-color: #24292F;
  border-radius: 5px 75px 5px;
  /* border: 10px solid #ff7a00; */
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: 200;
  flex-direction: column;
  height:100vh ;
  line-height: 0.8;
  justify-content: space-around;
  margin-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0%.5% 1.5%;
  width: 70%;
  td {
    font-size: 16px;
    text-align: center;
  }

  ::-webkit-scrollbar{
    width:35px;
    border-radius: 5px 175px 5px;
    
    
  }

  ::-webkit-scrollbar-track{
    background-color:yellow;
    width:15px;
    border-radius: 5px 175px 5px;
  }

  ::-webkit-scrollbar-button{
    width:15px;
    /* background-color:#24292F; */
    background-color:orangered;
  }
`;

export const TitleMap = styled.h3`
  background: rgba(255, 255, 255, 0.95);
  color: #555;
  display: flex;
  justify-content: center;
`;
