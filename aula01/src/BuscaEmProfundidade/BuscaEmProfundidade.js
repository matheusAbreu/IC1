import React from 'react';

const BuscaEmProfundidade = (props) => 
{
    return (
        <div>
            {props.no.nome}
            {props.no.ligacao.direita !== undefined && <BuscaEmProfundidade no={props.no.ligacao.direita} />}
         
        </div>
    );


}

export default BuscaEmProfundidade;
 