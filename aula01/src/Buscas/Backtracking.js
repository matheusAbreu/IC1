import React from 'react';

export default class Backtracking extends React.Component 
{
    constructor(props)
    {
        super(props);/*informado na chamada do componente
         result - nome do no que desejado se achado
         no - o no-candidato
         abertosDir - lista de abertos para a direita
         abertosEsq - lista de abertos para a esquerda
         abertosBaixo - lista de abertos para a baixo
         abertosCima - lista de abertos para a cima
         fechados - lista de fechados

         A ideia é fazer um caminhada na recursão priorizando uma das lista e, assimq que ela 
         esvaziar, seguir para a outra, até que o resultado seja impresso
        */

        /**Acredito que os nomes estão BEM sugestivos do que cada um faz */
        this.AddLista = this.AddLista.bind(this);/*essa função será mais generica do sua prima em BuscaEmProfundida, 
        pois terá que atender a todas as lista */
        this.RemoveListaAbertos = this.RemoveListaAbertos.bind(this);
        this.VerificaListaDeFechados = this.VerificaListaDeFechados.bind(this);
    }
    AddLista(lista, item)
    {
       if(lista !== undefined)
       {
           lista.push(item);
       }
    }
    RemoveListaAbertos(lista, item)
    {
        var encontro =false;
        if(lista !== undefined)
        {
            for(var i=lista.length; i > 0 ;i--)
            {
                if(lista[i] === item)
                    encontro = true;

                if(encontro)
                    lista[i] = lista[i+1];
            }
        }   
        if(encontro)
            lista.pull();
    }
    VerificaListaDeFechados(){}
    render()
    {
        return(
            <div>
                Hi, i'm backtranking code, nice to meet you
            </div>
        );
    }
}