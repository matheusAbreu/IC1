import React from 'react';
import BuscaP from './BuscaEmProfundidade';

function treeForDraw(noCabeca)
{
    this.item = noCabeca;
    this.ligacaoDaArvore = {
        baixo: undefined,
        esquerda: undefined,
        cima: undefined,
        baixo: undefined
    };
    
}
export default class Largura extends BuscaP
{
    constructor(props)
    {
        super(props);
        this.myTree = new treeForDraw(props.no);
        this.MontarArvore = this.MontarArvore.bind(this);
        this.RemovendoEspecificoAbertos = this.RemovendoEspecificoAbertos.bind(this);
        this.ImprimindoArvore = this.ImprimindoArvore.bind(this);
        this.ProcurandoNoMyTree = this.ProcurandoNoMyTree.bind(this);
        this.VerificaListaAbertosLargura = this.VerificaListaAbertosLargura.bind(this);
        this.VerificaListasLargura = this.VerificaListasLargura.bind(this);
    }
    VerificaListaAbertosLargura(no)//:treeDraw()
    {
        for(let i = 0;i < this.props.abertos.length;i++)
        {
            if(this.props.abertos[i] === no)
                return true;
        }

        return false;
    }
    ProcurandoNoMyTree(inicioTree, noProcurado)//Recebe um nó "normal"(O da estrutura Grafo.js) e retorna um treeForDraw
    {//inicioTree:treeForDraw; noProcurado:Grafos.no
        if(noProcurado === inicioTree.item)
        {
            return inicioTree;
        }
        else
        {
            if(inicioTree.baixo !== undefined)
            {return this.ProcurandoNoMyTree(inicioTree.baixo, noProcurado);}

            if(inicioTree.esquerda !== undefined)
            {return this.ProcurandoNoMyTree(inicioTree.esquerda, noProcurado);}

            if(inicioTree.cima !== undefined)
            {return this.ProcurandoNoMyTree(inicioTree.cima, noProcurado);}

            if(inicioTree.direita !== undefined)
            {return this.ProcurandoNoMyTree(inicioTree.direita, noProcurado);}
        }
        return null;
    }
    RemovendoEspecificoAbertos(item)
    {
        var temp, encontrou = false;
        if(this.props.abertos.length > 0)
        {
            for(var i=this.props.abertos.length; i > 0 ; i--)
            {
                if(this.props.abertos[i] === item)
                    encontrou = true;

                if(encontrou)
                {
                    this.props.abertos[i] = this.props.abertos[i-1]
                }
            }
        }
        if(encontrou)
        this.props.abertos.shift();
    }
    VerificaListasLargura(treedraw, noOrig)
    {
        return (this.VerificarListaDeFechados(noOrig) || this.VerificaListaAbertosLargura(treedraw));
    }
    MontarArvore(noArv, noGrafo, resultEncontrado)
    {
        var tempBaixo = undefined, tempEsquerda = undefined, tempCima = undefined, tempDireita = undefined, tempProx = undefined;
        if(!resultEncontrado)
            {
                if(noGrafo.ligacao.baixo !== undefined)
                {
                    if(!this.VerificaListasLargura(noArv, noGrafo.ligacao.baixo))
                    {
                        if(noGrafo.ligacao.baixo.nome === this.props.result)
                        {resultEncontrado = true;}
                        tempBaixo = new treeForDraw(noGrafo.ligacao.baixo);
                        noArv.ligacaoDaArvore.baixo =  tempBaixo;
                        this.props.abertos.push(tempBaixo);
                    }
                }
                
                if(noGrafo.ligacao.esquerda !== undefined)
                {
                    if(noGrafo.ligacao.esquerda.nome === this.props.result)
                        {resultEncontrado = true;}
                    if(!this.VerificaListasLargura(noArv, noGrafo.ligacao.esquerda))
                    {
                        tempEsquerda = new treeForDraw(noGrafo.ligacao.esquerda);
                        noArv.ligacaoDaArvore.esquerda =  tempEsquerda;
                        this.props.abertos.push(tempEsquerda);
                    }
                }

                if(noGrafo.ligacao.cima !== undefined)
                {
                    if(noGrafo.ligacao.cima.nome === this.props.result)
                        {resultEncontrado = true;}
                    if(!this.VerificaListasLargura(noArv, noGrafo.ligacao.cima))
                    {
                        tempCima = new treeForDraw(noGrafo.ligacao.cima);
                        noArv.ligacaoDaArvore.cima =  tempCima;
                        this.props.abertos.push(tempCima);
                    }                
                }

                if(noGrafo.ligacao.direita !== undefined)
                {   
                    if(noGrafo.ligacao.direita.nome === this.props.result)
                        {resultEncontrado = true;}
                    if(!this.VerificaListasLargura(noArv, noGrafo.ligacao.direita))
                    {
                        tempDireita = new treeForDraw(noGrafo.ligacao.direita);
                        noArv.ligacaoDaArvore.direita =  tempDireita;
                        this.props.abertos.push(tempDireita);
                    }
                }
            }
            this.props.fechados.push(noGrafo);
            tempProx = this.props.abertos.shift();
            if(this.props.abertos.length > 0) 
            {
                if(resultEncontrado)
                    this.MontarArvore( tempProx, tempProx.item, true);
                else
                    this.MontarArvore( tempProx, tempProx.item, false);
                        
            }
    }
    ImprimindoArvore(noArv)
    {
        let baixo = '', esquerda = '', cima = '', direita = '';

        if(noArv.ligacaoDaArvore.baixo !== undefined)
        {
            baixo = <div>{this.ImprimindoArvore(noArv.ligacaoDaArvore.baixo)}</div>;
        }
        if(noArv.ligacaoDaArvore.esquerda !== undefined)
        {
            esquerda = <div>{this.ImprimindoArvore(noArv.ligacaoDaArvore.esquerda)}</div>;
        }
        if(noArv.ligacaoDaArvore.cima !== undefined)
        {
            cima = <div>{this.ImprimindoArvore(noArv.ligacaoDaArvore.cima)}</div>;
        }
        if(noArv.ligacaoDaArvore.direita !== undefined)
        {
            direita = <div>{this.ImprimindoArvore(noArv.ligacaoDaArvore.direita)} </div>;
        }
        return(
            <div>
                <p style={{color:'black'}}>{noArv.item.nome}</p>
                <div>
                    <table style={{textAlign:'center'}}>
                        <td><tr>1{baixo}</tr></td>
                        <td><tr>2{esquerda}</tr></td>
                        <td><tr>3{cima}</tr></td>
                        <td><tr>4{direita}</tr></td>
                    </table>
                </div>
            </div>
        );
    }
    render()
    {
       
        this.MontarArvore(this.myTree, this.props.no, false);
        return (
            <div>
            {this.ImprimindoArvore(this.myTree)}
            </div>
        );
    }
}