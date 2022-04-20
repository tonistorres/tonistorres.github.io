import styled from "styled-components";

export const HeaderInput = styled.input`
align-items:center;
background-color:whitesmoke ;
border-radius: 5px 105px 25px;
color: #24292F;
display:flex ;
font-size: 19px;
font-weight: 500;
height:50% ;
justify-content:center;
margin-left:2% ;
text-align:center ;
width:60% ;
`;

export const HeaderSearchButton = styled.button`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  color: #24292F;
  display: flex;
  height:55%;
  justify-content:center;
  width: 50%;
`;

export const DivLoad = styled.div `
align-items:center;
border: 7px solid black  ;
display:flex ;
justify-content:center;
width:50% ;
`; 

export const DivButton = styled.div `
align-items:center ;
display:flex ;
height:100%;
justify-content:start;
width:17% ;
`; 

export const DivImgGitPerfil = styled.div `
align-items:center ;
display:flex ;
height:100%;
justify-content:start;
width:20% ;
`; 
// tópico interessante: https://pt.stackoverflow.com/questions/168620/como-definir-height-em-percentagem-usando-css
export const DivAgrega = styled.div `
@media screen and (max-width: 2300px) and (min-width: 1500px) {
align-items:center ;
background-color:#395C7E;
border-radius: 5px 105px 5px;
display:flex ;
height:10vh ;
width:100% ;  
}

`; 