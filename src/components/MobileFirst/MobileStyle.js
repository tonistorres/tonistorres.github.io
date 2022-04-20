import styled from "styled-components";

export const ContainerResponsivo = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
  
  align-items: center;
  border:5px solid black;
  display: flex;
  /* flex-direction:column ; */
  justify-content:center ;
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
width:30%;
height:50% ;
}
`;


export const DivResponsivaColumnCorpo= styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
/* border:5px solid black ; */
border-radius: 5px 175px 5px ;
background-color:#C3C3C3 ;
flex-direction: column;
align-items:center;
justify-content:center;
width:30%;
height:70%;
}
`;

export const TitleBio= styled.h1`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
border:15px solid white ;
border-radius: 5px 175px 5px ;
background-color:whitesmoke ;
align-items:center;
justify-content:center;
width:80%;
height:10%;
}
`;



export const DivConteudoCorpo= styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
border:15px solid white ;
border-radius: 5px 175px 5px ;
background-color:whitesmoke ;
flex-direction: column;
align-items:center;
justify-content:center;
width:80%;
height:80%;
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
height: 20%;
width:100%;
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
