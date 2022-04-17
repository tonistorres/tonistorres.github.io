import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { ContainerMain, ContainerLogo, ContainerNavBar, ContainerLista } from './HeaderStyles';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';



export default class Header extends Component {
    render() {
        return (
            <>
                <ContainerMain>
                    <ContainerNavBar>
                        <ContainerLista>
                            <Switch>

                                <Route exact path="/">
                                    <Home/>
                                </Route>

                                <Route path="/about">
                                    <About/>
                                </Route>

                                 <Route path="/skilss">
                                    <Skills/>
                                </Route>   

                                <p>Projects</p>
                                <p>Contact</p>
                            </Switch>
                        </ContainerLista>
                        <ContainerLogo>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
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
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </ContainerLogo>
                    </ContainerNavBar>
                </ContainerMain>

            </>
        )
    }
}
