import styled from "styled-components";
//*********************************** */
// Projetos e Deploy - ListProjetos  //
//********************************* */
export const ContainerManLisProjetos = styled.div`
align-items: center;
color: #F5F5F5;
display: flex;
flex-direction: column;
height:83vh ;
line-height: 1.8;
margin-left:3% ;
width: 38%;
a:visited {
  color: #E44D26;
}
`;

export const ContainerTable=styled.div`
align-items: center;
background-color:#24292F ;
border:2px solid #24292F;
border-top: 17px solid #24292F;
border-bottom: 8px solid #24292F;
border-radius: 5px 55px 10px;
color: whitesmoke;
display: flex;
flex-direction: column;
height:81vh ;
line-height: 1.8;
margin-top: 0.5%;
overflow: scroll; 
overflow-x: hidden;
width: 100%;
a:visited {
  color: yellow;
}
table {
  width :100%;
}

th {
  background-color:#24292F;
  color:#ffffff ;
}

`;


export const ContainerTitle=styled.h1` 
color:  #24292F;
margin-left: 15%;
display: flex;
font-size: 50px;
font-weight: 800;


`;


export const ContainerHeader =styled.div` 
align-items: center;
background-color:#F5F5F5;
/* border:10px solid #e44d26; */
border-radius: 15px;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 0.5%;
margin-bottom: 1.5%;
width: 100%;
height:25vh ;

`;