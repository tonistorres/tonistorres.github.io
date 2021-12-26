import styled from "styled-components";

export const ContainerMainUserNumber = styled.div`
  align-items: flex-start;
  /* border: 6px solid yellowgreen; */
  display: flex;
  height: 5vh;
  justify-content: space-around;
  margin-left: 4%;
  width: 90% ;
`;

export const NumberContainer = styled.div`
  align-items: center;
  background-color: #24292f;
  /* border: 5px solid orange; */
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
      rgba(36, 41, 47, 1) 41%,
      rgba(255, 255, 255, 1) 100%
    );

    border-radius: 3px;
    transition: 0.4s ease;
    span {
      color: #333;
    }
  }
`;
