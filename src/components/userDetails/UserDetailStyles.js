import styled from "styled-components";

/***Container GitHub - Div Principal -Main */
export const Container = styled.div`
  align-items: center;
  border:7px solid yellow;
  display: flex;
  height: 10vh;
  justify-content: space-around;
  width: 97%;

  span {
    color: #e44d26;
    font-weight: 800;
  }

`;

/**Container GitHub - Div Usuário e Login - Contida em Container */
export const ContainerNameLogin=styled.div `
align-items: center;
border:7px solid red;
display: flex;
justify-content: space-around;
width: 100%;
`;

/** */
export const Name = styled.h2`
/* border:15px solid red ; */
color: #444;
font-size: 25px;
font-weight: 700;
text-align: center;
width: 100%;
  span {
    color: #e44d26;
  }

`;

/** */
export const Username = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: #24292f;
  span {
    color: #e44d26;
  }
`;
export const Description = styled.p`
  border: 1px solid #999;
  color: #777;
  display: flex;
  font-size: 15px;
  height: 35px;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.3;
  margin: 10px 0;
  overflow: hidden;
  text-align: justify;
  width: 100%;
`;
