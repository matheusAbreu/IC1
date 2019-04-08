import React, { Component } from 'react';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
//var direcao = {baixo: 1, esquerda: 2, cima: 3, direita: 4};

export default class Grafo extends Component{
   
    cardGrafo = {
        title: "Grafo",
        text: "Lista de nó",

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