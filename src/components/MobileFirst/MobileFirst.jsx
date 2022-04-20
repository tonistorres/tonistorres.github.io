
import React, { Component } from 'react'
import { ContainerResponsivo, DivResponsivaColumn} from "./MobileStyle";


export default class MobileFirst extends Component {

  render() {
    return (
      <ContainerResponsivo>
        
        <DivResponsivaColumn>
          <div><img src="" alt="" /></div>
          <div><h2>Bio: Tonis Torres</h2></div>
          <div>
            <p>
           Fullstack web developing student at ░ Trybe ░ Unix |
           Bash | Git | GitHub | HTML | CSS | Java Script | DOM | Unit Testing | 
           React Testing Library | React |
            </p>
          </div>
        </DivResponsivaColumn>
        
        <DivResponsivaColumn>
            <h2> Sobre:</h2>
            <p>
            Tecnólogo por definição, sou apaixonado por linguagens de máquinas e 
            busco constantemente me reciclar, fazendo cursos, me relacionando com
            profissionais experientes, colegas de faculdade, professores etc.
            Aprender a aprender, esse é o lema que carrego comigo, e me esforço 
            sempre à melhorar como profissional e pessoa desenvolvedora que sou.
            </p>
        </DivResponsivaColumn>
        
       </ContainerResponsivo> 
    )
  }
}
