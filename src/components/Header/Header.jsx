import React, { Component } from 'react'
import { ContainerMain, ContainerLogo, ContainerNavBar, ContainerLista } from './HeaderStyles';
// import logo from './logoSite.png';

export default class Header extends Component {
    render() {
        return (
            <>
                <ContainerMain>
                    <ContainerNavBar>
                        <ContainerLista>
                            <p>Home</p>                                
                            <p>About</p>
                            <p>Portifolio</p>
                        </ContainerLista>
                        <ContainerLogo>
                            {/* <img src={logo} alt="Logo" /> */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />

                        </ContainerLogo>


                    </ContainerNavBar>
                </ContainerMain>

            </>
        )
    }
}