import React, { Component } from 'react';
import { ContainerMap, TitleMap } from './ResultadoDaPesquisaListaStyles';
import GitTriste from '../../assets/repoZero.gif';
import UserPicture from '../userPicture/UserPicture';


export default class ResultadoDaPesquisaProjetosGitHub extends Component {
    render() {
        const { arrayProps, url } = this.props;
        return (
            <>

                {
                    // https://www.youtube.com/watch?v=rF6guBbfTl0
                    arrayProps.length ? (

                        <ContainerMap>
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Repository</th>
                                    <th>Visibilidade</th>
                                </tr>

                                {
                                    // https://www.w3schools.com/html/html_tables.asp
                                    arrayProps.map(({ id, name, visibility }, index) => (

                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{name}</td>
                                            <td>{visibility}</td>
                                        </tr>


                                    ))
                                }

                            </table>
                        </ContainerMap>


                    ) : (
                        <ContainerMap>
                            <TitleMap>Sem Repositories</TitleMap>

                            <UserPicture url={url} alternativeText="Foto Perfil GitHub" />
                            <img src={GitTriste} alt="Git Triste" />

                        </ContainerMap>

                    )
                }

            </>
        )
    }
}
