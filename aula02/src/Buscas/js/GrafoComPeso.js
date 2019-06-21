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
        this.DuplaLiga = this.DuplaLiga.bind(this);
        this.ImprimindoGrafo = this.ImprimindoGrafo.bind(this);
    }
    DuplaLiga(grafo, noUm, noDois, peso)
    {
        if(grafo.listaDeNos.length > 0)
        {
            for(var i = 0; i < grafo.listaDeNos.length; i++) 
            {
                if (grafo.listaDeNos[i].nome === noUm.trim().toUpperCase())
                {
                    for(var j= 0; j < grafo.listaDeNos.length; j++)
                    {
                        if(grafo.listaDeNos[j].nome === noDois.trim().toUpperCase())
                        {
                            grafo.listaDeNos[i].AddLigacao(grafo.listaDeNos[j], peso);
                            grafo.listaDeNos[j].AddLigacao(grafo.listaDeNos[i], peso);   
                        }
                    }
                }
            }
        }
    }
    LigarGrafo(grafo, num)
    {
        switch(num)
        {
            case 2:
                this.DuplaLiga(grafo, 'A', 'B', 9);
                this.DuplaLiga(grafo, 'A', 'D', 13);
                this.DuplaLiga(grafo, 'A', 'C', 5);
                this.DuplaLiga(grafo, 'B', 'D', 3);
                this.DuplaLiga(grafo, 'B', 'E', 10);
                this.DuplaLiga(grafo, 'C', 'F', 12);
                this.DuplaLiga(grafo, 'D', 'E', 6);
                this.DuplaLiga(grafo, 'D', 'G', 14);
                this.DuplaLiga(grafo, 'E', 'G', 7);
                this.DuplaLiga(grafo, 'F', 'G', 10);

                break;
            case 3:
                this.DuplaLiga(grafo, 'A', 'B', 8);
                this.DuplaLiga(grafo, 'A', 'D', 16);
                this.DuplaLiga(grafo, 'A', 'C', 3);
                this.DuplaLiga(grafo, 'B', 'D', 7);
                this.DuplaLiga(grafo, 'B', 'E', 6);
                this.DuplaLiga(grafo, 'C', 'D', 14);
                this.DuplaLiga(grafo, 'C', 'F', 6);
                this.DuplaLiga(grafo, 'D', 'E', 5);
                this.DuplaLiga(grafo, 'D', 'F', 6);
                this.DuplaLiga(grafo, 'D', 'G', 10);
                this.DuplaLiga(grafo, 'E', 'G', 15);
                this.DuplaLiga(grafo, 'F', 'G', 17);

                break;
            default:
            break;
        }

    }
    ImprimindoGrafo(grafo)
    {
        return(
            <div className='container'>
                <p>{grafo.nome}</p>
               <div className='row'>
                {grafo.listaDeNos.map((nos, index) => {
                        return <LittleCard key={index} title={nos.nome} 
                        text={nos.listaLigacao.map((item, id) =>{
                            return <div>{item.noLigado.nome}->{item.pesoLigacao}</div>
                        }) } />
                    })}
               </div>
            </div>
        );
    }
    MontarGrafo(e)
    {
        switch(e)
        {
            case 2:
                if(this.state.expl2.listaDeNos.length > 0)
                {
                    break;
                }    
                this.state.expl2.AddNo('A');
                this.state.expl2.AddNo('B');
                this.state.expl2.AddNo('C');
                this.state.expl2.AddNo('D');
                this.state.expl2.AddNo('E');
                this.state.expl2.AddNo('F');
                this.state.expl2.AddNo('G');
                this.LigarGrafo(this.state.expl2, 2);

                this.setState({... this.state.expl2});
                break;
            case 3:
                if(this.state.expl3.listaDeNos.length > 0)
                {
                    break;
                }    
                this.state.expl3.AddNo('A');
                this.state.expl3.AddNo('B');
                this.state.expl3.AddNo('C');
                this.state.expl3.AddNo('D');
                this.state.expl3.AddNo('E');
                this.state.expl3.AddNo('F');
                this.state.expl3.AddNo('G');
                this.LigarGrafo(this.state.expl3, 3);

                this.setState({... this.state.expl3});
                break;
            default:
                break;
        }
       
    }
    render()
    {
        return(
            
            <>
                <div style={{textAlign:'center'}}>
                    <Button variant="outline-primary" onClick={(e) => this.MontarGrafo(2)}>Montar Exemplo 2</Button>
                    {this.ImprimindoGrafo(this.state.expl2)}
                </div>
                <div style={{textAlign:'center'}}>
                <Button variant="outline-primary" onClick={(e) => this.MontarGrafo(3)}>Montar Exemplo 3</Button>
                {this.ImprimindoGrafo(this.state.expl3)}
            </div>
            </>
        );
    }
}