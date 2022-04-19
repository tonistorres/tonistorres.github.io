import styled, { keyframes } from "styled-components";

export const TelaSplash = styled.body`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #24292f;
  width: 100%;
  height: 100vh;
  /* border:3px solid red; */
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const ContainerTimer = styled.span`
  font-size: 78px;
  font-weight: 700;
  margin-left: 2%;
  color: #333;
`;

export const ContainerAlinhaRow = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;


// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaHTML = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  border: 5px solid orange;
  position: absolute;
  margin-top: 1px;
  margin-left: 1%;
  height: 60px;
  width: 60px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaCSS = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  border: 5px solid blue;
  position: absolute;
  margin-top: 1px;
  margin-left: 11%;
  height: 60px;
  width: 60px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaJS = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  border: 5px solid yellow;
  position: absolute;
  margin-top: 1px;
  margin-left: 21%;
  height: 60px;
  width: 60px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaReact = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid cyan;
  margin-top: 1px;
  margin-left: 31%;
  height: 60px;
  width: 60px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaJest = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid violet;
  margin-top: 1px;
  margin-left: 41%;
  height: 60px;
  width: 60px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaBash = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 51%;
  height: 40px;
  width: 40px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaMysql = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 61%;
  height: 40px;
  width: 40px;
`;
// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaGIT = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid orange;
  margin-top: 1px;
  margin-left: 71%;
  height: 40px;
  width: 40px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaGitHub = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 81%;
  height: 40px;
  width: 40px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaUbuntu = styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 91%;
  height: 40px;
  width: 40px;
`;


// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaRedux= styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 91%;
  height: 40px;
  width: 40px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const ImagemTecnologiaDocker= styled.img`
  animation: ${(props) => props.SlideToSlideSlide} 7s ease infinite;
  position: absolute;
  border: 5px solid #999;
  margin-top: 1px;
  margin-left: 91%;
  height: 40px;
  width: 40px;
`;

// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const LoadingSlider = styled.div`
  animation: ${(props) => props.SlideToSlideSlide} 4s ease infinite;
  position: absolute;
  margin-top: 20px;
  margin-left: 10px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #777;
  box-shadow: 0 0 10px #333;
`;
// https://www.youtube.com/watch?v=PgsoxuyXb-4
export const SlideToSlideSlide = keyframes`

0%{
background: #777;
border: 5px solid #000;
border-radius:50%;
box-shadow:0 0 10px #777;
width: 10px;
left: 0;
}

25%{
background: #777;
border: 5px solid #333;
border-radius:50%;
box-shadow:0 0 10px #555;
width: 100px;
left: 0;

}
50%{
background: #faed27;
box-shadow:0 0 10px #777;
width: 10px;
left: 90px;

}
75%{
background: #faed27;
box-shadow:0 0 10px #777;
width: 100px;
left: 0px;
}
100%{
background: #333;
box-shadow:0 0 10px #333;
width: 10px;
left: 0;
}

`;

export const ImagemFundo = styled.img`
  animation: ${(props) => props.BorderKeyImgFundo} 6s ease infinite;
  background-image: url(${(props) => props.src});
  border-radius: 50%;
  border: 12px solid #fff;
  height: 10vh;
  margin-left: 25%;
  margin-right: 10%;
  width: 15%;
`;

export const BorderKeyImgFundo = keyframes`

0%{

background: #999;
border: 3px solid #999;
border-radius:50%;
box-shadow:0 0 10px #999;
height: 10vh;
width: 15%;
}

10%{
background: #888;
border: 5px solid #F5FFFA;
border-radius:50%;
box-shadow:0 0 35px #F5FFFA;
height: 15vh;
width: 20%;
}

20%{
background: #777;
border: 10px solid #F0FFF0;
border-radius:50%;
box-shadow:0 0 70px #F0FFF0;
height: 20vh;
width: 25%;

}

30%{
background: #666;
border: 15px solid	#E0FFFF;
border-radius:50%;
box-shadow:0 0 105px #E0FFFF;
height: 25vh;
width: 30%;
}

40%{
background: #555;
border: 20px solid	#B0E0E6;
border-radius:50%;
box-shadow:0 0 140px #B0E0E6;
height: 30vh;
width: 35%;
}

50%{
background: #444;
border: 15px solid	#ffff00;
border-radius:50%;
box-shadow:0 0 105px #ffff00;
height: 30vh;
margin-left: 50%;
width: 35%;
}


60%{
background: #333;
border: 20px solid	#ffff52;
border-radius:50%;
box-shadow:0 0 140px #ffff52;
height: 30vh;
margin-left: 1%;
width: 35%;
}

70%{
background: #222;
border: 15px solid	#ffff7a;
border-radius:50%;
box-shadow:0 0 105px #ffff7a;
height: 25vh;
margin-left: 25%;
width: 30%;

}

75%{
background: #333;
border: 20px solid	#ffffbf;
border-radius:50%;
box-shadow:0 0 140px #ffffbf;
height: 30vh;
margin-left: 1%;
width: 35%;
}

80%{
background: #444;
border: 15px solid	#ffffdf;
border-radius:50%;
box-shadow:0 0 105px #ffffdf;
height: 30vh;
margin-left: 50%;
width: 35%;
}

85%{
  background: #555;
border: 20px solid	#ffffff;
border-radius:50%;
box-shadow:0 0 140px #ffffff;
height: 30vh;
margin-left:25% ;
width: 35%;
}
100%{

background: #999;
border: 3px solid #999;
border-radius:50%;
box-shadow:0 0 10px #999;

}


`;
export const ContainerLoading = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1150px) {
    align-items: center;
    background-color: #f5f5f5;
    /* border: 2px solid black; */
    /* background-color: #110c23; */
    font-size: 40px;
    font-weight: 900;
    color: #777;
    display: flex;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    /* border: 1px solid black; */
    img {
      width: 60px;
      height: 60px;
    }
  }

  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 1149px) and (min-width: 1000px) {
    align-items: center;
    background-color: #f5f5f5;
    color: #777;
    display: flex;
    justify-content: space-around;
    height: 70px;
    width: 90%;
    /* border: 1px solid black; */
    img {
      width: 50px;
      height: 50px;
    }
  }

  /* 3º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 600px) {
    align-items: center;
    background-color: #f5f5f5;
    color: #777;
    display: flex;
    height: 70px;
    justify-content: space-around;
    margin-top: 15px;
    width: 100%;

    img {
      width: 48px;
      height: 48px;
    }
  }

  /* 4º Intervalo de configuração WDTH */
  @media screen and (max-width: 599px) and (min-width: 280px) {
    display: none;
  }

  /* 4º Intervalo de configuração WDTH */
  @media screen and (max-width: 279px) and (min-width: 1px) {
    display: none;
  }
`;
export const ContainerRedeSociais = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
    align-items: center;
    background-color: #f5f5f5;
    bottom: 1px;
    display: flex;
    height: 37px;
    justify-content: space-between;
    left: 0px;
    margin: 0 10px;
    margin-bottom: 0px;
    position: fixed;
    right: 0px;
    width: 40%;
  }
  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
    align-items: center;
    bottom: 1px;
    display: flex;
    height: 35px;
    justify-content: space-around;
    margin-bottom: 1px;
    position: fixed;
    width: 100%;
  }

  /* 3 Intervalo de configuração WDTH */
  @media screen and (max-width: 700px) and (min-width: 450px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    bottom: 1px;
    position: fixed;
    width: 100%;
    img {
      width: 90px;
      height: 28px;
    }
  }
  /* 3.1 Intervalo de configuração WDTH */
  @media screen and (max-width: 449px) and (min-width: 280px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    bottom: 1px;
    position: fixed;
    width: 100%;

    img {
      width: 80px;
      height: 28px;
    }
  }

  /* 4º Intervalo de configuração WDTH */
  @media screen and (max-width: 279px) and (min-width: 1px) {
    display: none;
  }

  /* 1.9 Dispositivo iPhone5/SE Horizontal */
  @media screen and (width: 320px) and (height: 568px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }

  /*2.0 Dispositivo iPhone 6/7/8 Horizontal */
  @media screen and (width: 375px) and (height: 667px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }

  /* 4.0 Dispositivo iPhone X Horizontal */
  @media screen and (width: 375px) and (height: 812px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }
  /* 8.0 Galaxy Fold Vertical */
  @media screen and (width: 653px) and (height: 280px) {
    display: none;
  }

  /* 9.0 Nest Hub */
  @media screen and (width: 1024px) and (height: 600px) {
    display: none;
  }

  /*10 .0 Nest Hub Max */
  @media screen and (width: 1280px) and (height: 800px) {
    display: none;
  }

  /* 1.1 Intervalo de configuração Horizontal */
  @media screen and (max-height: 894px) and (min-height: 1px) {
    display: none;
  }
`;

export const ContainerRedeSociaisLoading = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1000px) {
    align-items: center;
    background-color: #f5f5f5;
    display: flex;
    height: 37px;
    justify-content: space-between;
    margin: 0 10px;
    width: 40%;
  }
  /* 2º Intervalo de configuração WDTH */
  @media screen and (max-width: 999px) and (min-width: 701px) {
    align-items: center;
    bottom: 1px;
    display: flex;
    height: 35px;
    justify-content: space-around;
    margin-bottom: 1px;
    position: fixed;
    width: 100%;
  }

  /* 3 Intervalo de configuração WDTH */
  @media screen and (max-width: 700px) and (min-width: 450px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    bottom: 1px;
    position: fixed;
    width: 100%;
    img {
      width: 90px;
      height: 28px;
    }
  }
  /* 3.1 Intervalo de configuração WDTH */
  @media screen and (max-width: 449px) and (min-width: 280px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    bottom: 1px;
    position: fixed;
    width: 100%;

    img {
      width: 80px;
      height: 28px;
    }
  }

  /* 4º Intervalo de configuração WDTH */
  @media screen and (max-width: 279px) and (min-width: 1px) {
    display: none;
  }

  /* 1.9 Dispositivo iPhone5/SE Horizontal */
  @media screen and (width: 320px) and (height: 568px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }

  /*2.0 Dispositivo iPhone 6/7/8 Horizontal */
  @media screen and (width: 375px) and (height: 667px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }

  /* 4.0 Dispositivo iPhone X Horizontal */
  @media screen and (width: 375px) and (height: 812px) {
    /* https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors */
    img[src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"]
    {
      display: none;
    }
  }
  /* 8.0 Galaxy Fold Vertical */
  @media screen and (width: 653px) and (height: 280px) {
    display: none;
  }

  /* 9.0 Nest Hub */
  @media screen and (width: 1024px) and (height: 600px) {
    display: none;
  }

  /*10 .0 Nest Hub Max */
  @media screen and (width: 1280px) and (height: 800px) {
    display: none;
  }

  /* 1.1 Intervalo de configuração Horizontal */
  @media screen and (max-height: 894px) and (min-height: 1px) {
    display: none;
  }
`;
