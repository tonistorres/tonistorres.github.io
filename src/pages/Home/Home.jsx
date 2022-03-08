// https://www.youtube.com/watch?v=kqp1lNnv6K8&t=1325s  PropagateLoader

import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import UserContainer from '../../components/userContainer/CorpoGitHubProfile.jsx';
// import About from '../About/About'
import PropagateLoader from "react-spinners/PropagateLoader";
import UserPicture from '../../components/userPicture/UserPicture.jsx';
import UserDetails from '../../components/userDetails/UserDetails.jsx';
import UserNumbers from '../../components/userNumbers/UserNumbers.jsx';
import ResultadoDaPesquisaProjetosGitHub from '../../components/ListComponent/ResultadoPesquisaListaProjetos';
import { FiSearch } from 'react-icons/fi';

import {
    ContainerMain,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
} from './HomeStyles';

import '../../index.css';
import client from '../../services/client';
import Fotter from '../../components/Fotter/Fotter';

import ContainerListaDeProjetos from '../../ListProjetos/ContainerListaProjetos';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedValue: 'tonistorres',
            avatarValue: '',
            nameValue: '',
            loginValue: '',
            repoPublicValue: 0,
            bioValue: '',
            followersValue: '',
            followingValue: '',
            arrayValue: [],
            avatarFixed: '',
            nameFixed: '',
            loginFixed: '',
            bioFixed: '',
            loading: 'false',
            mensagemInfo: '',



        }

        this.handleChange = this.handleChange.bind(this);
        this.handleGetUserData = this.handleGetUserData.bind(this);
        this.hadleInfoFixed = this.hadleInfoFixed.bind(this);
        this.handleGetUserDataTratado = this.handleGetUserDataTratado.bind(this);
        this.limparMensagemInformativa = this.limparMensagemInformativa.bind(this);
        this.barraInfoDificuldadesAcessoPerfil = this.barraInfoDificuldadesAcessoPerfil.bind(this);
        this.headerInputMensagem = this.headerInputMensagem.bind(this);
        this.verificaInputHeaderNull = this.verificaInputHeaderNull.bind(this);
    }

    componentDidMount() {
        this.hadleInfoFixed();
        this.handleGetUserData();

    }

    handleChange(evt) {
        this.setState({
            searchedValue: evt.target.value,
        })

    }

    async hadleInfoFixed() {
        const { searchedValue } = this.state;

        try {
            const response = await client.get(`/${searchedValue}`);
            const {
                avatar_url,
                name,
                login,
                bio,
            } = response.data;

            this.setState({
                avatarFixed: avatar_url,
                nameFixed: name,
                loginFixed: login,
                bioFixed: bio,

            });

        } catch (error) {
            console.log("Erro Gerado:", error);
        }
    }

    //https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
    //https://www.youtube.com/watch?v=8DoLUW_7PJQ
    async handleGetUserDataTratado() {
        const { searchedValue, loginValue } = this.state;
        try {
            if (searchedValue !== loginValue && searchedValue !== null) {
                this.handleGetUserData();
            } else {
                if (searchedValue !== null) {
                    this.setState({
                        mensagemInfo: 'Dados já renderizados no App 🕵️‍♂️',
                        loading: false,
                    })
                }
            }

        } catch (error) {
            if (error) {
                this.setState({
                    mensagemInfo: `Dificuldades em acessar perfil ${searchedValue}.🤨🤨🤨`,
                    loading: false
                }).this.loginDigitadoCorretamente();

            }

        }
    }


    async handleGetUserData() {
        const { searchedValue } = this.state;
        try {
            this.setState({ loading: true, mensagemInfo: 'Pesquisando na API. Aguarde...🤔🤔🤔' });
            const response = await client.get(`/${searchedValue}`);
            const repositories = await client.get(`${searchedValue}/repos`);

            const {
                avatar_url,
                name,
                login,
                public_repos,
                bio,
                followers,
                following,
            } = response.data;

            this.setState({
                avatarValue: avatar_url,
                nameValue: name,
                loginValue: login,
                repoPublicValue: public_repos,
                bioValue: bio,
                followersValue: followers,
                followingValue: following,
                arrayValue: repositories.data,
                loading: false,
                mensagemInfo: 'Pesquisa realizada com sucesso 😀😀😀 IUP!!',

            });

        } catch (error) {
            if(error){
            this.setState({
                mensagemInfo: `Error acesso API :${error}.`,
                loading: false
            })
            console.log('executando função Limpa mensagem');
            this.limparMensagemInformativa();

            console.log('executando função mensagem Informtiva após o erro:');
            this.barraInfoDificuldadesAcessoPerfil();

            console.log('Da uma dica para usuariao melhorar sua experiencia');
            this.verificaInputHeaderNull();
        }

        }
    }

    //******************************************** ***/
    //MELHORANDO A EXPERIENCIA DO USUARIO POR MEIO  *
    //DA BARRA INFORMATIVA                         *    
    //********************************************/

    verificaInputHeaderNull() {
        console.log('passei 1');
        this.intervalId = setTimeout(this.mensagemUsuario.bind(this), 2000);
        setTimeout(this.limparInterval.bind(this), 6000);
    }

    limparInterval() {
        console.log('passei 2');
        clearTimeout(this.intervalId);
    }
    mensagemUsuario() {
        this.setState({
            mensagemInfo: 'Verifique se você fez uma pesquisa de um valor nulo 🕵️'
        });
    }
    
    // Verificar se login do usuário foi digitado corretamente


    loginDigitadoCorretamente() {
        console.log('passei 1');
        this.intervalId = setTimeout(this.mensagemLoginUsuarioDigitadoCorretamente.bind(this), 2000);
        setTimeout(this.limparIntervaLoginDigitCorreto.bind(this), 4000);
    }
    limparIntervaLoginDigitCorreto() {
        console.log('passei 2');
        clearTimeout(this.intervalId);
    }
    mensagemLoginUsuarioDigitadoCorretamente() {
        this.setState({
            mensagemInfo: '😒 Tive dificuldades ao Pesquisar API. O login foi digitado corretamente? 🕵️'
        });
    }


    //Funcionalidade Pronta 1
    barraInfoDificuldadesAcessoPerfil() {
        const { searchedValue } = this.state;
        this.setState({ mensagemInfo: `😞 Dificuldades com API perfil não disponível ${searchedValue}.💁 Tente mais tarde!!` });
        
    }


    /************************************************************************************************* */

    limparMensagemInformativa() {
        this.setState({ mensagemInfo: '' });
    }

    // ao clicar no input name o sistema deve
    // infomar de forma clara para usuário que ele deve
    // digitar seu user name 
    //https://reactjs.org/docs/events.html#focus-events
    //https://reactjs.org/docs/forms.html
    headerInputMensagem(e) {
        const { target } = e;
        target.value = '';
        this.setState({
            mensagemInfo: 'Digite seu Login GitHub.',
            searchedValue: target.value
        });
    }

    render() {
        const {
            searchedValue,
            avatarValue,
            nameValue,
            loginValue,
            repoPublicValue,
            bioValue,
            followersValue,
            followingValue,
            arrayValue,
            avatarFixed,
            nameFixed,
            loginFixed,
            bioFixed,
            loading,
            mensagemInfo,

        } = this.state;

        return (
            <div>
                <Header />
                <ContainerMain>
                    <UserContainer>
                        <HeaderInputContainer>
                            <HeaderTitle>GitHub</HeaderTitle>
                            <HeaderInput
                                onFocus={(e) => { this.headerInputMensagem(e) }}
                                placeholder='Digite seu Login GitHub'
                                onChange={this.handleChange}
                                value={this.state.searchedValue}
                            >

                            </HeaderInput>
                            <HeaderSearchButton value={searchedValue} onClick={this.handleGetUserDataTratado}><FiSearch /></HeaderSearchButton>
                            <UserPicture url={avatarValue} alternativeText="Imagem Perfil" />
                            <PropagateLoader color={"#E44D26"} loading={loading} size={20} />
                        </HeaderInputContainer>

                        <UserDetails name={nameValue} login={loginValue} bio={bioValue} />
                        <UserNumbers repositories={repoPublicValue} followers={followersValue} following={followingValue} />
                        <ResultadoDaPesquisaProjetosGitHub arrayProps={arrayValue} url={repoPublicValue}></ResultadoDaPesquisaProjetosGitHub>
                    </UserContainer>
                    {/* <TitleMap></TitleMap> */}

                    <ContainerListaDeProjetos url={avatarFixed} name={nameFixed} login={loginFixed} bio={bioFixed} />

                </ContainerMain>
                <Fotter mensagem={mensagemInfo} />
            </div>
        )

    }
}
