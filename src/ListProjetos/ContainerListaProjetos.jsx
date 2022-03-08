import React, { Component } from 'react'
import UserDetails from '../components/userDetails/UserDetails';
import {
    ContainerManLisProjetos,
    ContainerTable
} from './ContainerListaProjetoStyles';

export default class ContainerListaProjetos extends Component {
    render() {
       return (
            <ContainerManLisProjetos>
                <ContainerTable>
                <table>
                    <tr>
                        <th>Fonte</th>
                        <th>Projeto </th>
                        <th>Deploy</th>

                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/filtro-cores/" target="_blank" rel="noreferrer" >Filtro de Cores React (Class of component- HOFs)</a></td>
                        <td>True</td>


                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/my-interdimensional-app/" target="_blank" rel="noreferrer"> Life Cycle Component React (Class of component)</a></td>
                        <td>True</td>

                    </tr>
                    <tr>
                    <td>GitHub</td>
                    <td><a href="https://tonistorres.github.io/clone-mercado-livre/" target="_blank" rel="noreferrer"> Carrinho de Compras (Class of component)</a></td>
                    <td>True</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/carta_misteriosa/" target="_blank" rel="noreferrer" >Carta Misteriosa Habilidades:Manipular Dom, Css e Java Script</a></td>
                        <td>True</td>


                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/lesson_learned/" target="_blank" rel="noreferrer" >Lições Aprendidas:Manipular Dom, Css e Java Script</a></td>
                        <td>True</td>


                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/meme_generator/" target="_blank" rel="noreferrer" >Meme Generator:Manipular Dom, Css e Java Script</a></td>
                        <td>True</td>


                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/color_guess/" target="_blank" rel="noreferrer" >Color Guess:Manipular Dom, Css e Java Script</a></td>
                        <td>True</td>


                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td><a href="https://tonistorres.github.io/project_conceitos_redux_1/" target="_blank" rel="noreferrer" >Redux: Conceitos iniciais JS Puro</a></td>
                        <td>True</td>


                    </tr>

                    <tr>                        
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_para-aproveitar-a-semana-on-estudar-l%C3%B3gica-ugcPost-6874025418903584768-6Yxw' target='_blank' rel="noreferrer">Projeto ToDoList Test RTL(React Testing Library) </a></td>
                        <td>False</td>

                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_sistema-desenvolvido-em-javase-com-banco-activity-6870196416388636672-Sdu_' target="_blank" rel="noreferrer">Sistema Clinica JavaSE Gerenciador MySQL(Hospedado)</a></td>
                        <td>False</td>

                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_bem-uma-tela-de-login-em-javase-s%C3%B3-pra-n%C3%A3o-activity-6870190869937487872-eRQk' target="_blank" rel="noreferrer">Tela Login javaSE Gerenciador Mysql(Hospedado)</a></td>
                        <td>False</td>

                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_bem-revisando-javase-para-n%C3%A3o-perder-o-costume-activity-6870183914758045696-k94x' target="_blank" rel="noreferrer">Sistema Busca JavaSE Linguagem SQl(MySQL/LocalHost)</a></td>
                        <td>False</td>

                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_trabalhoso-gostaria-de-agradecer-a-ajuda-activity-6868927652456148993-xeeQ' target="_blank" rel="noreferrer">Projeto Music Collection React(JavaScript)</a></td>
                        <td>False</td>

                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td><a href='https://www.linkedin.com/posts/tonistorres_javase-bateu-uma-saudade-retr%C3%B4-nossa-que-activity-6868232752454516737-0x0A' target="_blank" rel="noreferrer"> Cadastro Especialidades JavaSE Gerenciador Banco Dados MySQL(Hospedado)</a></td>
                        <td>False</td>

                    </tr>
                </table>
                </ContainerTable>   
            </ContainerManLisProjetos>
        )
    }
}
