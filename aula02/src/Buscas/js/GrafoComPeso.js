import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Aba from './AbasOcultaveis';
import LittleCard from './LittleCard';

class Ligacao
{
    constructor(no, peso)
    {

    this.noLigado = no;
    this.pesoLigacao = peso;
    }

    AtribuiNovoPeso(novoPeso)
    {
        this.pesoLigacao = novoPeso;
    }
}

class No
{
    constructor(meuNome) 
    {
        this.nome = meuNome;
        this.listaLigacao = [];
    }

    AddLigacao(no, peso )
    {
        var tempLigacao = new Ligacao(no, peso);
        this.listaLigacao.push(tempLigacao);
    }
}
export class Grafo
{
    constructor(meuNome)
    {
        this.nome = meuNome;
        this.listaDeNos = [];
    }
    AddNo(no)
    {
        var tempNo = new No(no);
        this.listaDeNos.push(tempNo);
    }
}

export default class GrafoComPeso extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            expl2 : new Grafo('Exemplo 2'),
            expl3 : new Grafo('Exemplo 3')
        };
        

        this.MontarGrafo = this.MontarGrafo.bind(this);
        this.LigarGrafo = this.LigarGrafo.bind(this);
        this.ImprimindoGrafo = this.ImprimindoGrafo.bind(this);
    }
    LigarGrafo(){}
    ImprimindoGrafo(grafo)
    {
        return(
            <div className='container'>
                <p>{grafo.nome}</p>
               <div className='row'>
                {grafo.listaDeNos.map((nos, index) => {
                        return <LittleCard key={index} title={grafo.listaDeNos[index].nome} 
                        text={grafo.listaDeNos[index].listaLigacao.map((itens, id) =>{
                            return <div  key={id}>{itens.nome}</div>
                        }) } />
                    })}
               </div>
            </div>
        );
    }
    MontarGrafo(grafo, num =2)
    {
        switch(num)
        {
            case 2:
                this.state.expl2.AddNo('A');
                this.state.expl2.AddNo('B');
                this.state.expl2.AddNo('C');
                this.state.expl2.AddNo('D');
                this.state.expl2.AddNo('E');
                this.state.expl2.AddNo('F');
                this.state.expl2.AddNo('G');
                break;
            case 3:
                grafo.AddNo('A');
                grafo.AddNo('B');
                grafo.AddNo('C');
                grafo.AddNo('D');
                grafo.AddNo('E');
                grafo.AddNo('F');
                grafo.AddNo('G');
                break;
            default:
                break;
        }
        this.setState({... this.state.expl2});
    }
    render()
    {
        return(
            
            <div style={{textAlign:'center'}}>
                <Button variant="outline-primary" onClick={this.MontarGrafo}>Montar Exemplo 2</Button>
                {this.ImprimindoGrafo(this.state.expl2)}
            </div>
        );
    }
}