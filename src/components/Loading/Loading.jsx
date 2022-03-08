import React, { Component } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {
     TelaSplash,
     ContainerLoading,
     ContainerRedeSociaisLoading,
     ImagemFundo,
     ContainerAlinhaRow,
     ContainerTimer,
     ImagemTecnologiaHTML,
     ImagemTecnologiaCSS,
     ImagemTecnologiaReact,
     SlideToSlideSlide,
     BorderKeyImgFundo,
     ImagemTecnologiaJS,
     ImagemTecnologiaJest,
     ImagemTecnologiaBash,
     ImagemTecnologiaMysql,
     ImagemTecnologiaGIT,
     ImagemTecnologiaGitHub,
     ImagemTecnologiaUbuntu

    } from './LoadingStyles'
import Home from '../../pages/Home/Home';
import { Route, Switch } from "react-router";
import ImgPerfil from './perfil.jpeg';
import Contador from '../Contador/Contador';
//https://www.youtube.com/watch?v=SR8755C0bME

export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            loading: true
        }
        this.handleState = this.handleState.bind(this);
    }
    handleState() {
        this.setState({
            redirect: true,
            loading: false
        })
    }

    render() {

        const { redirect, loading } = this.state;

        setTimeout(this.handleState, 4000);
         if (redirect) {
            return (
                <>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </>
            )
        }
        return (


            <TelaSplash>
                
                <ContainerLoading>
                    <ImagemTecnologiaHTML src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaCSS src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt="css3"SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaReact src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaJS src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javaScript" SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaJest src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest"SlideToSlideSlide={SlideToSlideSlide} />
                    <ImagemTecnologiaBash src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="terminal bash"SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaMysql src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql"SlideToSlideSlide={SlideToSlideSlide} />
                    <ImagemTecnologiaGIT src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaGitHub src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg " alt="gitHub"SlideToSlideSlide={SlideToSlideSlide}/>
                    <ImagemTecnologiaUbuntu src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu"SlideToSlideSlide={SlideToSlideSlide} />
                </ContainerLoading>
                <ContainerAlinhaRow>
                <ClimbingBoxLoader color={"#F5F5F5"} loading={loading} size={80} />
                <ImagemFundo src={ImgPerfil}BorderKeyImgFundo={BorderKeyImgFundo}/>
                <ContainerTimer><Contador/></ContainerTimer>
                </ContainerAlinhaRow>
                     
                <ContainerRedeSociaisLoading>
                    <a href="https://www.instagram.com/tonistorresferreira/" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" height="38" width="138" target="_blank" alt="imagem-intagram" /> </a>
                    <a href="https://www.facebook.com/datorres.ferreira" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" height="38" width="138" target="_blank" alt="imagem-facebook" /> </a>
                    <a href="https://www.youtube.com/channel/UCjFo00zX0yvFrm5VIW1ieUw" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" height="38" width="138" target="_blank" alt="imagem-youtube" /> </a>
                    <a href="https://www.linkedin.com/in/tonistorres/" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="38" width="138" target="_blank" alt="imagem-linkedin" /> </a>
                    <a href="https://github.com/tonistorres" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="38" width="138" alt="Imagem-github" /></a>
                </ContainerRedeSociaisLoading>

            </TelaSplash>

        )
    }
}
