import React from 'react';

const BuscaEmProfundidade = (prosp) => 
{
    return (
        <span>
            {prosp.no.nome}
            {prosp.lista[0].nome && prosp.lista.length > 0}
        </span>
    );


}

export default BuscaEmProfundidade;
