import styled from "styled-components";


export const Container = styled.div`

  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: end;
  width: 97%;
  span {
    color: #e44d26;
    font-weight: 800;    
  }


`;


export const ContainerNameLogin=styled.div `
align-items: center;
border-radius:5px 105px 955px ;
display: flex;
justify-content: end;
width: 80%;
`;

/**Container GitHub - Div Name Usuario - Contido em Div Usuário e Login */
export const Name = styled.h2`
/* border:15px solid red ; */
color: #fff;
font-size: 15px;
font-weight: 700;
text-align: center;
width: 100%;
  span {
    color: #333;
  }

`;

/**Container GitHub - Div Username - Contido em Div Usuário e Login */
export const Username = styled.h2`
/* border:15px solid yellow ; */
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  width: 100%;
    span {
      color: #333;
  }

`;


/**Container GitHub - Div Descriptio - Contido em Div Usuário e Login 
 * DESATIVADO
 */
export const Description = styled.p`
  border: 1px solid #999;
  color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  height: 35px;
  justify-content: center;
  line-height: 1.3;
  margin: 10px 0;
  overflow: hidden;
  text-align: justify;
  width: 100%;
`;
