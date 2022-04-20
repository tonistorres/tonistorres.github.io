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
/* border-radius: 50%; */
border-radius: 5px 175px 5px ;
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
background-color:#395C7E;
flex-direction: column;
align-items:center;
justify-content:center;
width:40%;
height:70%;
}
`;

export const TitleBio= styled.h1`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:flex ;
/* border:9px solid white ; */
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
/* border:15px solid white ; */
border-radius: 5px 175px 5px ;
background-color:whitesmoke ;
flex-direction: column;
overflow: scroll; 
overflow-x: hidden;
width:95%;
height:70%;

p{
font-size:17px ;
font-weight:400;
letter-spacing:0.5px ;
text-align: justify;
text-indent: 6%;
text-justify: inter-word;
margin-left:10% ;
margin-right:10% ;

}

::-webkit-scrollbar{
    width:25px;
    border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-track{
    background-color:#F5F5F5;
    border-radius:5px 175px 5px;
    width:20px;

  }

  ::-webkit-scrollbar-thumb{
      background-color:yellow;
      border-radius:5px 175px 5px;
  }


  ::-webkit-scrollbar-thumb:hover{
      background-color:whitesmoke;
      border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-button{
      background-color:#227DC3;
      padding:2px 2px ;
      border-radius:15px 55px 5px;
  }

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
