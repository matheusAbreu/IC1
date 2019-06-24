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
        {
            for(let i=0;i < this.props.abertos.length; i++)
            {
                for(let j=this.props.abertos.length-1; j > i; j--)
                {
                    if(this.props.abertos[i].pesoRelativo > this.props.abertos[j].pesoRelativo)
                    {
                        temp = this.props.abertos[i];
                        this.props.abertos[i] = this.props.abertos[j];
                        this.props.abertos[j] = temp;
                    }
                }    
            }
        }
        for(let x = 0;x < this.props.abertos.length;x++)
        {   alert(this.props.abertos[x].no.nome+"!!!!");}
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
                if(this.props.abertos[i].no.nome === ArvVeri.no.nome)
                {
                    return true;
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
                if(this.props.fechados[i].nome === noVeri.nome)
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
                        <p>{arvImpri.no.nome}->{arvImpri.pesoRelativo}</p>
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
    MontarArvoreResult()
    {
        var noCandidato = new ArvorePesada(this.props.abertos.shift(), 0);
        var arvResult = noCandidato;
        var indexcorr = 0;
        if(noCandidato.no !== undefined){
           
            while(true) // xgh brabão aqui
            {
                alert(noCandidato.no.nome+"<-");
                    this.AddListaFechados(noCandidato.no);
                    if(noCandidato.no !== undefined && noCandidato.no.nome === this.props.result)
                    {
                        return arvResult;
                    }
                    else
                    {
                        for(let i=0; i < noCandidato.no.listaLigacao.length ;i++)
                        {
                            if(!this.VerificandoListaFechados(noCandidato.no.listaLigacao[i].noLigado))
                            {
                                alert(noCandidato.no.listaLigacao[i].noLigado.nome+"->"+noCandidato.no.listaLigacao[i].pesoLigacao);
                                noCandidato.AddNosNoCaminho(noCandidato.no.listaLigacao[i].noLigado,noCandidato.no.listaLigacao[i].pesoLigacao);
                                this.AddListaAbertos(noCandidato.arvoreDeCaminha[i - indexcorr]);
                            }
                            else
                            {
                                indexcorr++;
                            }
                        }
                        indexcorr = 0;
                        this.OrganizaListaAbertos();
                    
                    }
                    alert(noCandidato.no.nome);
                    if(this.props.abertos.length > 0)
                    {
                        noCandidato = this.props.abertos.shift();
                    }
                    else
                    {
                        alert(this.props.abertos.length + "AaA");
                        break;
                    }
            }
        }
        return arvResult;
    }
    render()
    {
        this.ArvBusca = this.MontarArvoreResult();
        return(
            <div>{this.ImprimindoArvorePesada(this.ArvBusca)}</div>
        );
    }
}