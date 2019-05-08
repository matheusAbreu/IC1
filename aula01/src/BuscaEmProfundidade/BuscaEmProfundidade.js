import React from 'react';

export default class BuscaEmProfundidade extends React.Component 
{
    constructor(props)
    {
        super(props);/*informado na chamada do componente
         result - nome do no que desejado se achado
         no - o no no qual se encontra
         abertos - lista de abertos
         fechados - lista de fechados
        */
        this.AddListaAbertos = this.AddListaAbertos.bind(this);
        this.RemoveListaAbertos = this.RemoveListaAbertos.bind(this);
        this.AddListaFechados = this.AddListaFechados.bind(this);
    }
    AddListaAbertos(){}
    RemoveListaAbertos(){}
    AddListaFechados(){}

    render()
    {//Varredura será feita aqui
        
        return (
            <div>
                {this.props.no.nome}
                {this.props.no.ligacao.direita !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.direita} />}
             
            </div>
        );
    } 


}
 