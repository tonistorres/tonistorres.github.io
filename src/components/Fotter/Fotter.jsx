import React, { Component } from 'react'
import { ContainerRedeSociais,SpanMensagemInformativa,BorderKeyFumcaInformativa } from './FotterStyles';
import Timer from '../Loading/Timer';
export default class Fotter extends Component {
    render() {
        const {mensagem}=this.props;
        return (
            <ContainerRedeSociais>
                <a href="https://www.instagram.com/tonistorresferreira/" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" height="38" width="138" target="_blank" alt="imagem-intagram" /> </a>
                <a href="https://www.facebook.com/datorres.ferreira" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" height="38" width="138" target="_blank" alt="imagem-facebook" /> </a>
                <a href="https://www.youtube.com/channel/UCjFo00zX0yvFrm5VIW1ieUw" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" height="38" width="138" target="_blank" alt="imagem-youtube" /> </a>
                <a href="https://www.linkedin.com/in/tonistorres/" target="_blank" rel="noreferrer">  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="38" width="138" target="_blank" alt="imagem-linkedin" /> </a>
                <a href="https://github.com/tonistorres" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="38" width="138" alt="Imagem-github" /></a>
                <SpanMensagemInformativa BorderKeyFumcaInformativa={BorderKeyFumcaInformativa}>
                    <Timer mensagem={mensagem}/>
                    
                    </SpanMensagemInformativa>
            </ContainerRedeSociais>


        )
    }
}
