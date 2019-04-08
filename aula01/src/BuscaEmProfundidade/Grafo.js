import React, { Component } from 'react';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = {baixo: 1, esquerda: 2, cima: 3, direita: 4};
var ligamentos = {
    dir: 0,
    nomeDoNo:""        
}

function no(){
    this.nome= "";
    this.listaDeLigamentos = [];

    this.NovoNo = function(newNome)
    {
        this.nome = newNome;
    };
    this.AddLigamento = function(novaDir, noRef)
    {
        var novo = new ligamentos();
        novo.dir = novaDir;
        novo.nomeDoNo = noRef;
        this.listaDeLigamentos.push(novo);
    }
}
function GeraGrafo(myText)
{
    var temp = new no(), myList = [];
        for(var i = 0; i <10;i++)
        {
            temp.NovoNo("no" + i.toString());
            myList.push(temp);
            myText += "\n";
            myText += myList[i].nome + "->";
        }           
        alert(myText);
}
export default class Grafo extends Component{

    cardGrafo = {
        title: "Grafo",
        text: "Lista de nó:",
        listaDeNos: [],
        action: () => GeraGrafo(this.text)/**/
        
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