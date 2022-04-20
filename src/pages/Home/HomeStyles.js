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
  justify-content: space-around;
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
border:5px solid blue ;
background-color:#395C7E ;
align-items:center;
justify-content:center;
width:140% ;
`; 


export const DivButton = styled.div `
background-color:#395C7E;
display:flex ;
align-items:center ;
justify-content:center;
width:50% ;
`; 

export const DivImgGitPerfil = styled.div `
background-color:#395C7E;
display:flex ;
align-items:center ;
justify-content:center;
width:50% ;
`; 

export const DivAgrega = styled.div `
@media screen and (max-width: 2300px) and (min-width: 1px) {
align-items:center ;
border:5px solid red;
background-color:#395C7E;
border-radius: 5px 105px 5px;
display:flex ;
justify-content:space-between;
width:100% ;  
}

`; 