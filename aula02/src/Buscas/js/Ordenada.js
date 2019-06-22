import React from 'react';

class ArvorePesada 
{
    constructor(meuNo, pesoAteAqui)
    {
        this.no = meuNo;

        this.pesoRelativo = pesoAteAqui;
        this.arvoreDeCaminha = [];
    }
    AddNosNoCaminho(noFilho, pesoDoNoFilho)
    {
        var tempNo = new ArvorePesada(noFilho, (pesoDoNoFilho + this.pesoRelativo));
        this.arvoreDeCaminha.push(tempNo);
    }
}

export default class Ordenada extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.ArvBusca = undefined;
        this.ProcurandoMenorPesoLista = this.ProcurandoMenorPesoLista.bind(this);
        this.MontarArvoreResult = this.MontarArvoreResult.bind(this);
        this.ImprimindoArvorePesada = this.ImprimindoArvorePesada.bind(this);
    }
    ImprimindoArvorePesada(arvImpri)
    {
        if(arvImpri.no !== undefined)
            return(
                <div className='row'>
                    <div className='container'>
                        <p>{arvImpri.no.nome}(Quantidade de filhos({arvImpri.arvoreDeCaminha.length}))</p>
                        <table>
                            {arvImpri.arvoreDeCaminha.map((ramoArv, id)=>{
                                return (<td><tr>
                                    {ramoArv.no.nome}({ramoArv.no.pesoRelativo})
                                    </tr></td>);
                            })}
                        </table>
                    </div>
                </div>
            );
            else
                return <></>;
    }
    ProcurandoMenorPesoLista(lista)
    {

    }
    MontarArvoreResult()
    {
        var temp = new ArvorePesada(this.props.no, 0);
        if(this.props.no !== undefined)
        {
            if(this.props.no.listaLigacao !== undefined)
            {
                for(let i=0;i < this.props.no.listaLigacao.length; i++)
                {
                    temp.AddNosNoCaminho(this.props.no.listaLigacao[i].noLigado,
                        this.props.no.listaLigacao[i].pesoLigacao);
                }
            }   
        }
        return temp;
    }
    render()
    {
        this.ArvBusca = this.MontarArvoreResult()
        return(
            <div>{this.ImprimindoArvorePesada(this.ArvBusca)}</div>
        );
    }
}