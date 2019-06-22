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
        this.VerificandoListaFechados = this.VerificandoListaFechados.bind(this);
        this.VerificandoListaAbertos = this.VerificandoListaAbertos.bind(this);
        this.AddListaFechados = this.AddListaFechados.bind(this);
        this.AddListaAbertos = this.AddListaAbertos.bind(this);
        this.OrganizaListaAbertos = this.OrganizaListaAbertos.bind(this);
    }
    OrganizaListaAbertos()
    {
        let temp;
        if(this.props.abertos.length > 0)
            for(let i=0;i < this.props.abertos.length; i++)
            {
                for(let j=this.props.abertos.length; j > 0; j++)
                if(this.props.abertos[i].pesoRelativo > this.props.abertos[j].pesoRelativo)
                {
                    temp = this.props.abertos[j];
                    this.props.abertos[j] = this.props.abertos[i];
                    this.props.abertos[i] = temp;
                }
            }
    }
    AddListaAbertos(novoNo)
    {
        if(!this.VerificandoListaAbertos(novoNo))
        {
            this.props.abertos.push(novoNo);
        }
    }
    VerificandoListaAbertos(ArvVeri)//Recebe tipo:ArvorePesada
    {
        if(this.props.abertos.length > 0)
        {
            for(let i = 0; i < this.props.abertos.length; i++)
            {
                if(this.props.abertos[i].no === ArvVeri.no)
                {
                    if(this.props.abertos[i].pesoRelativo < ArvVeri.pesoRelativo)
                    {
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            }
        }
        return false;
    }
    AddListaFechados(novoNo)
    {
        if(!this.VerificandoListaFechados(novoNo))
        {
            this.props.fechados.push(novoNo);
        }
    }
    VerificandoListaFechados(noVeri)
    {
        if(this.props.fechados.length > 0)
        {
            for(let i = 0; i < this.props.fechados.length; i++)
            {
                if(this.props.fechados[i] === noVeri)
                {
                    return true;
                }
            }
        }
        return false;
    }
    ImprimindoArvorePesada(arvImpri)
    {
        //{ramoArv.no.nome}({ramoArv.no.pesoRelativo})
        if(arvImpri.no !== undefined)
            return(
                <div className='row'>
                    <div className='container'>
                        <p>{arvImpri.no.nome}->{arvImpri.pesoRelativo}(QntFilhos({arvImpri.arvoreDeCaminha.length}))</p>
                        <table>
                            {arvImpri.arvoreDeCaminha.map((ramoArv, id)=>{
                                return (<td><tr>
                                    {this.ImprimindoArvorePesada(ramoArv)}
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
    MontarArvoreResult(noAtual)
    {
        if(noAtual.no !== undefined)
        {
            if(noAtual.no.listaLigacao !== undefined)
            {
                if(!this.VerificandoListaFechados(noAtual.no))
                {
                    for(let i=0;i < noAtual.no.listaLigacao.length; i++)
                    {
                        noAtual.AddNosNoCaminho(noAtual.no.listaLigacao[i].noLigado,
                            noAtual.no.listaLigacao[i].pesoLigacao);

                        this.AddListaFechados(noAtual.arvoreDeCaminha[i].no);
                        this.MontarArvoreResult(noAtual.arvoreDeCaminha[i]);
                    }
                    
                }
            }   
        }
        return noAtual;
    }
    render()
    {
        this.ArvBusca = this.MontarArvoreResult((new ArvorePesada(this.props.abertos.shift(), 0)));
        return(
            <div>{this.ImprimindoArvorePesada(this.ArvBusca)}</div>
        );
    }
}