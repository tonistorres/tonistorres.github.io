import React, { Component } from 'react'
//https://www.youtube.com/watch?v=M0Q7JneMLm8&t=10s
export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            segundos: 30,
            minutos: 0
        }

        this.decrementar = this.decrementar.bind(this);
    }

    decrementar() {
        this.setState((stateAnterior) => {
            return ({ segundos: stateAnterior.segundos - 1 });
        });
    }

    // componentWillUnmount() {
    //     this.setState({ segundos: 0 });

    // }

    //metodo especial que é chamado depois da renderização ou montagem da tela do app 
    // numa escala ele funciona da seguinte forma
    //1º é executador o constructor
    //2º é executada a função render e montado o componente
    //3º é executado o componentDidMout (circle Life) 
    //https://medium.com/creditas-tech/m%C3%A9todos-do-ciclo-de-vida-de-componentes-reactjs-um-mergulho-profundo-332ed7b3b782
    //componentDidMount: Este é o método que é executado depois que o componente foi montado no DOM. 
    //Este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização.
    // Com esse método podemos acessar o DOM, devemos inicializar bibliotecas JS como D3 ou Jquery,
    // que precisa acessa-lo
componentDidMount() {
    this.timer = setInterval(() => this.decrementar(), 1000);
}
render() {
    const { segundos } = this.state;
    return (
        <div><h3>{segundos} segundos</h3>  </div>
    )
}
}
