import React, { Component } from 'react'
import { ContainerMainUserNumber, NumberContainer } from "./UserNumbersStyles";

export default class UserNumbers extends Component {
    render() {
        const { repositories,followers,following }=this.props;
        return (
            <ContainerMainUserNumber>
                <NumberContainer >
                    <p>{repositories}&nbsp;</p>
                    <span> Repo.(s)</span>
                </NumberContainer>
                <NumberContainer>
                    <p>{followers}&nbsp;</p>
                    <span> Seguidores</span>
                </NumberContainer>
                <NumberContainer>
                    <p>{following}&nbsp;</p>
                    <span> Seguindo</span>
                </NumberContainer>
            </ContainerMainUserNumber>
        )
    }
}



