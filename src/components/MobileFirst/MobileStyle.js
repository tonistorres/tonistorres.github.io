import styled from "styled-components";

export const ContainerResponsivo = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
  display: flex;
  align-items: center;
  border:5px solid black;
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
/* border:5px solid black ; */
background-color:#395C7E ;
border-radius: 50%;
flex-direction: column;
align-items:center;
justify-content:center;
width:50%;
height:50% ;
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
border-radius: 50% ;
align-items:center;
justify-content:center;

}
`;

export const ImgPadraoPerfil = styled.img`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
    border-radius: 50%;
    display: flex;
    height: 280px;
    width:  280px;
}
`;
