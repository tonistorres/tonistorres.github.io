import styled from "styled-components";

export const ContainerResponsivo = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
  display: flex;
  align-items: center;
  background-color: yellow;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}

`;

export const DivResponsivaColumnPerfil = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
border:5px solid black ;
background-color:wheat ;
flex-direction: column;
align-items:center;
justify-content:center;
width:50%;
height:50vh ;
}
`;


export const DivResponsivaColumnCorpo= styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
border:5px solid black ;
background-color:whitesmoke ;
flex-direction: column;
align-items:center;
justify-content:center;
width:50%;
height:50vh ;
}
`;


export const DivImg = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
border:5px solid black ;
border-radius: 50% ;
align-items:center;
justify-content:center;
width:80px;
height:80px ;
}
`;

export const ImgPadraoPerfil = styled.img`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
    border-radius: 50%;
    display: flex;
    height: 80px;
    width: 80px;
}
`;
