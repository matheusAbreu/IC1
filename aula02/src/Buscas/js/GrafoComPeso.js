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
        this.expl2 = new Grafo('Exemplo 2');
        this.expl3 = new Grafo('Exemplo 3');

        this.MontarGrafo = this.MontarGrafo.bind(this);
    }
    MontarGrafo(grafo, num)
    {
        switch(num)
        {
            case 2:
                break;
            case 3:
                break;
            default:
                break;
        }
    }
    render()
    {
        return(
            <div style={{textAlign:'center'}}>
                <Button variant="outline-primary" >Montar Exemplo 2</Button>
                Hello, i'm the {this.props.title} code, nice to meet you!
            </div>
        );
    }
}