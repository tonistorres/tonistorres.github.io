
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
            Tecnólogo por definição, sou apaixonado por linguagens de máquinas e busco constantemente me reciclar,
            fazendo cursos, me relacionando com profissionais experientes, colegas de faculdade, amigos 
            desenvolvedores, professores, etc. Aprender a aprender, esse é o meu lema, e me esforço sempre
            a melhorar como profissional e pessoa desenvolvedora que sou.
            Atualmente resolvi me desafiar ingressando no curso de Desenvolvimento Web,
            onde estou apendendo uma nova stack, que contempla tecnologias como: Type Script, Node Js, React 
            entre outras. O curso é muito intenso dado a robustez curricular, mais o comprometimento genuíno 
            de ambas as partes são o diferencial nessa jornada de sucesso.
          </p>
            <p>
           Fullstack web developing student at ░ Trybe ░ Unix |
           Bash | Git | GitHub | HTML | CSS | Java Script | DOM | Unit Testing | 
           React Testing Library | React |
            </p>
            <hr/>
          </DivConteudoCorpo>  
        </DivResponsivaColumnCorpo>
        
       </ContainerResponsivo> 
    )
  }
}
