import React from 'react';
import BuscaP from './BuscaEmProfundidade';

export default class Largura extends BuscaP
{   
    constructor(props)
    {
        super(props);
        this.ProcurandoMenorLista = this.ProcurandoMenorLista.bind(this);
    }
    ProcurandoMenorLista(){}
    render()
    {
        return(
            <div>Hello, i'm Ordenada code, nice to meet you</div>
        );
    }
}