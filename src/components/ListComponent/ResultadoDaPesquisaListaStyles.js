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
  font-size: 18px;
  font-weight: 200;
  flex-direction: column;
  height:100vh ;
  line-height: 0.8;
  justify-content: space-around;
  margin-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  padding-top:25px;
  width: 70%;
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
    background-color:#24292F;
    border-radius:5px 175px 5px;
    width:20px;

  }

  ::-webkit-scrollbar-thumb{
      background-color:whitesmoke;
      border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-button{
      background-color:yellow;
      border-radius:5px 75px 5px;
  }


`;

export const TitleMap = styled.h3`
  background: rgba(255, 255, 255, 0.95);
  color: #555;
  display: flex;
  justify-content: center;
`;
