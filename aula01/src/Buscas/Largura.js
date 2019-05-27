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
    MontarArvore(noGrafo)
    {
        var noArv = this.myTree;
        
            if(noGrafo.ligacao.baixo !== undefined)
            {
                if(!this.VerificarListas(noGrafo.ligacao.baixo))
                {
                    noArv.ligacaoDaArvore.baixo =  new treeForDraw(noGrafo.ligacao.baixo);
                    this.props.abertos.push(noGrafo.ligacao.baixo);
                }
            }
            
            if(noGrafo.ligacao.esquerda !== undefined)
            {
                if(!this.VerificarListas(noGrafo.ligacao.esquerda))
                {
                    noArv.ligacaoDaArvore.esquerda =  new treeForDraw(noGrafo.ligacao.esquerda);
                    this.props.abertos.push(noGrafo.ligacao.esquerda);
                }
            }

            if(noGrafo.ligacao.cima !== undefined)
            {
                if(!this.VerificarListas(noGrafo.ligacao.cima))
                {
                    noArv.ligacaoDaArvore.cima =  new treeForDraw(noGrafo.ligacao.cima);
                    this.props.abertos.push(noGrafo.ligacao.cima);
                }                
            }

            if(noGrafo.ligacao.direita !== undefined)
            {   
                if(!this.VerificarListas(noGrafo.ligacao.direita))
                {
                    noArv.ligacaoDaArvore.direita =  new treeForDraw(noGrafo.ligacao.direita);
                    this.props.abertos.push(noGrafo.ligacao.direita);
                }
            }
            this.props.fechados.push(noGrafo);
            //this.props.abertos.shift();
            this.props.abertos.shift();
            /**
            if(this.props.abertos.length > 0)
            {
                //noArv = this.BuscandoNaTree(this.myTree,noGrafo);
                noGrafo = this.props.abertos[0];
            }
            else
                break;
                 */
        
    }
    ImprimindoArvore()
    {

    }
    render()
    {
       
        this.MontarArvore(this.props.no);
        return (
            <div>
                <p style={{color:'black'}}>{this.props.no.nome}</p>
                <table>
                    <td>
                        <tr>1{this.myTree.ligacaoDaArvore.baixo === undefined && <p style={{color:'red'}}>nulo</p>}
                            {this.myTree.ligacaoDaArvore.baixo !== undefined &&
                            <Largura no={this.myTree.ligacaoDaArvore.baixo} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                        </tr>
                    </td>
                    <td>
                        <tr>2{this.myTree.ligacaoDaArvore.esquerda === undefined && <p style={{color:'red'}}>nulo</p>}
                            {this.myTree.ligacaoDaArvore.esquerda !== undefined &&
                            <Largura no={this.myTree.ligacaoDaArvore.esquerda} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                        </tr>
                    </td>
                    <td>
                        <tr>3{this.myTree.ligacaoDaArvore.cima === undefined && <p style={{color:'red'}}>nulo</p>}
                            {this.myTree.ligacaoDaArvore.cima !== undefined &&
                            <Largura no={this.myTree.ligacaoDaArvore.cima} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result}/>}
                        </tr>
                    </td>
                    <td>
                        <tr>4{this.myTree.ligacaoDaArvore.direita === undefined && <p style={{color:'red'}}>nulo</p>}
                            {this.myTree.ligacaoDaArvore.direita !== undefined &&
                            <Largura no={this.myTree.ligacaoDaArvore.direita} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                        </tr>
                    </td>
                </table>
            </div>
        );
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