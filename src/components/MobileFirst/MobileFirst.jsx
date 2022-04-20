
import React, { Component } from 'react'
import { 
  ContainerResponsivo,
  DivResponsivaColumnPerfil,
  DivResponsivaColumnCorpo,
  DivImg,
  ImgPadraoPerfil,
  DivConteudoCorpo,
  TitleBio

} from "./MobileStyle";
import perfilLinkedin from '../../assets/img/perfil.png';

export default class MobileFirst extends Component {

  render() {
    return (
      <ContainerResponsivo>
        
        <DivResponsivaColumnPerfil>
          <DivImg><ImgPadraoPerfil src={ perfilLinkedin } alt="Foto Perfil" /></DivImg>
        </DivResponsivaColumnPerfil>
        
        <DivResponsivaColumnCorpo>
        <TitleBio>Bio: Tonis Torres</TitleBio>
          <DivConteudoCorpo>
        <TitleBio> Sobre:</TitleBio>
          <p>
            Tecnólogo por definição, sou apaixonado por linguagens de máquinas e 
            busco constantemente me reciclar, fazendo cursos, me relacionando com
            profissionais experientes, colegas de faculdade, professores etc.
            Aprender a aprender, esse é o lema que carrego comigo, e me esforço 
            sempre à melhorar como profissional e pessoa desenvolvedora que sou.
          </p>
            <p>
           Fullstack web developing student at ░ Trybe ░ Unix |
           Bash | Git | GitHub | HTML | CSS | Java Script | DOM | Unit Testing | 
           React Testing Library | React |
            </p>
          </DivConteudoCorpo>  
        </DivResponsivaColumnCorpo>
        
       </ContainerResponsivo> 
    )
  }
}
