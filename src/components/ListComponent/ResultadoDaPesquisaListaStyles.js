import styled from "styled-components";
//*************************************/
//Max 30 Repo GitHub - ListComponent //
//***********************************/
export const ContainerMap = styled.div`
  /* background: rgba(255, 255, 255, 0.95); */
  background-color: #24292F;
  border: 1px solid #333;
  border-radius: 10px;
  /* border-bottom: 10px solid #ff7a00; */
  
  border-top: 8px solid #24292f;
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: 200;
  flex-direction: column;
  height:55vh ;
  line-height: 0.8;
  justify-content: space-around;
  margin-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0%.5% 1.5%;
  width: 97%;
  td {
    font-size: 16px;
    text-align: center;
  }
`;

export const TitleMap = styled.h3`
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: #555;
`;
