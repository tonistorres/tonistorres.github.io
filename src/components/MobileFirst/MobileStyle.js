import styled from "styled-components";

export const ContainerResponsivo = styled.div`

@media screen and (max-width: 2300px) and (min-width: 1500px) {
    display:none;
}

@media screen and (max-width: 1499px) and (min-width: 1px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}

`;
