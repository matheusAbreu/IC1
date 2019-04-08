import React, { Component } from 'react';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = {baixo: 1, esquerda: 2, cima: 3, direita: 4};
var ligamentos = {
    dir: 0,
    nomeDoNo:""        
}

var no = {
    nome: "",
    listaDeLigamentos: [],

    NovoNo: function(newNome)
    {
        this.nome = newNome;
    },
    AddLigamento: function(novaDir, noRef)
    {
        var novo = new ligamentos();
        novo.dir = novaDir;
        novo.nomeDoNo = noRef;
        this.listaDeLigamentos.push(novo);
    }
}

export default class Grafo extends Component{

    cardGrafo = {
        title: "Grafo",
        text: "Lista de nó",
        listaDeNos: [],

        GeraGrafo: function()
        {
            
        }
    }
    render()
    {
        return (
            <div className="container text-center">
                <div className="row">
                    <LittleCard {... this.cardGrafo}/>
                </div>
            </div>
        );
    }
    
};