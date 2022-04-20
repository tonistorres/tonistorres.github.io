import styled from "styled-components";

export const HeaderInput = styled.input`
  background-color:whitesmoke;
  border-radius: 5px 105px 25px;
  border: none;
  color: #24292F;
  font-size: 19px;
  font-weight: 500;
  height: 60px;
  padding: 0 16px;
  transition: 0.4s ease;
  text-align: center;
  width: 100%;
  &:focus {
    outline: none;
    transition: 0.4s eas100;
    width: 95%;
    }
`;

export const HeaderSearchButton = styled.button`
  width: 50%;
  height:50%;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content:center;
  color: #24292F;
`;

export const DivLoad = styled.div `
display:flex ;
align-items:center;
justify-content:center;
width:50% ;
`; 


export const DivInput = styled.div `
display:flex ;
border:8px solid blanchedalmond ;
background-color:#395C7E ;
align-items:center;
justify-content:center;
width:55% ;
`; 


export const DivButton = styled.div `
align-items:center ;
background-color:#395C7E;
border:8px solid blueviolet ;
display:flex ;
height:100%;
justify-content:center;
width:25% ;
`; 

export const DivImgGitPerfil = styled.div `
align-items:center ;
background-color:#395C7E;
border:8px solid black ;
display:flex ;
height:100%;
justify-content:center;
width:25% ;
`; 
// tópico interessante: https://pt.stackoverflow.com/questions/168620/como-definir-height-em-percentagem-usando-css
export const DivAgrega = styled.div `
@media screen and (max-width: 2300px) and (min-width: 1px) {
align-items:center ;
border:5px solid red;
background-color:#395C7E;
border-radius: 5px 105px 5px;
display:flex ;
height:10vh ;
/* justify-content:space-between; */
width:100% ;  
}

`; 