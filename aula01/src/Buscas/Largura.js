import React from 'react';
import BuscaP from './BuscaEmProfundidade';

function treeForDraw(noCabeca)
{
    this.item = noCabeca;
    this.ligacaoDaArvore = [];
    this.filaDeProx = [];
    this.listaDeFech = [];


    this.VerificarFilaDeProx = function (item)
    {
        /**Se o item estiver na lista ele retorna verdadeiro, caso contrario, não */
        if(this.filaDeProx.length === 0)
        {
            return false;
        }
        else
        {
            for(var i = 0; i < this.filaDeProx.length; i++)
            {
                if(this.filaDeProx[i] === item)
                    return true;
            }
            return false;
        }
    }
    this.VerificarListaDeFech = function (item)
    {
        /**Se o item estiver na lista ele retorna verdadeiro, caso contrario, não */
        if(this.listaDeFech.length === 0)
        {
            return false;
        }
        else
        {
            for(var i = 0; i < this.listaDeFech.length; i++)
            {
                if(this.listaDeFech[i] === item)
                    return true;
            }
            return false;
        }
    }
    this.VerifListas = function (item)
    {
        return (this.VerificarFilaDeProx(item) || this.VerificarListaDeFech(item));
    }
    this.AddFilaDeProx = function(item)
    {
        if(!this.VerifListas(item))
        {
            this.filaDeProx.push(item);
        }
    }
    this.AddListaDeFech = function (item)
    {
        if(this.VerificarListaDeFech(item))
        {
            this.listaDeFech.push(item);
        }
    }
    this.RemoveFilaDeProx = function ()
    {
        var temp = this.filaDeProx.shift();

        this.AddFilhosListaFechados(temp);
    }
    this.MontarArvore = function()
    {}
    this.imprimirArv = function()
    {}
}
export default class Largura extends BuscaP
{
    constructor(props)
    {
        super(props);
        this.myTree = new treeForDraw(props.no);

    }
    render()
    {
        this.RemoveListaAbertos();
        this.AddListaFechados();
        this.AddListaAbertos();

        if(this.VerificarListaDeFechadosPeloNome(this.props.result))
        {
            return (<div></div>);
        }
        else if(this.EvitandoDivorcio())
        {
            this.AddFilhosListaFechados();
            return(
                <div>
                <p style={{color:'black'}}>{this.props.no.nome}-> ({this.props.abertos.length})</p>

                <div>
                    <table >
                        <td>
                            <tr><div>1:{this.props.no.ligacao.baixo === undefined && <p style={{color:'red'}}>nulo</p>}
                                {this.props.no.ligacao.baixo !== undefined && this.props.no.ligacao.baixo.nome}</div>
                            </tr>
                        </td>
                        <td>
                            <tr><div>2:{this.props.no.ligacao.esquerda === undefined && <p style={{color:'red'}}>nulo</p>}
                            { this.props.no.ligacao.esquerda !== undefined && this.props.no.ligacao.esquerda.nome}</div>
                            </tr>
                        </td>
                        <td>
                            <tr><div>3:{this.props.no.ligacao.cima === undefined && <p style={{color:'red'}}>nulo</p>}
                            { this.props.no.ligacao.cima !== undefined && this.props.no.ligacao.cima.nome}</div>
                            </tr>
                        </td>
                        <td>
                            <tr><div>4:{this.props.no.ligacao.direita === undefined && <p style={{color:'red'}}>nulo</p>}
                            {this.props.no.ligacao.direita !== undefined && this.props.no.ligacao.direita.nome}</div>
                            </tr>
                        </td>
                    </table>
                </div>

            </div>
            );
        }
        else
        {
            return(
                <div>
                    <p style={{color:'black'}}>{this.props.no.nome}</p>

                    <div>
                        <table>
                           
                        </table>
                    </div>
                    

                </div>
            );
        }
    }
}
/**
 *  {this.props.abertos.map((nos, index) => {
        return ( 
            <td>
                <tr>
                    <Largura key={index} no={nos} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>
                </tr>
            </td>
        );
    })}
 */