import styled from "styled-components";

export const Section = styled.section `
@media screen and (max-width: 2300px) and (min-width: 1500px) {
  align-items:center;
  background: #395C7E;
  border-radius: 5px 175px 5px;
  display: flex;
  height:80vh;
  flex-direction: column;
  justify-content:center ;
  margin-top :35px;
  width: 30%;  
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
display:none;
}

`;
