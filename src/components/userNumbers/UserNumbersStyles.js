import styled from "styled-components";

/**Div Principal/Main --> Estilo Pertence a UserNumbers */
export const ContainerMainUserNumber = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: space-around;
  margin-left: 4%;
  width: 90% ;
`;

export const NumberContainer = styled.div`
  align-items: center;
  background-color: #24292f;
  border: 5px solid yellow;
  border-radius: 5px 105px 25px;
  color: white;
  display: flex;
  flex-direction: row;
  height: 5vh;
  justify-content: center;
  margin-top: 0.5%;
  width: 29%;
  p {
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }

  span {
    color: #777;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }

  &:hover {
    /* cursor: pointer; */
    /* https://cssgradient.io/ */
    background: linear-gradient(
      180deg,
      rgba(235, 233, 224, 1) 100%,
      
      
    );

    border-radius: 3px;
    transition: 0.4s ease;
    span {
      color: #333;
      background-color:whitesmoke ;
    }
  }
`;
