import React from 'react';

export default class BuscaEmProfundidade extends React.Component 
{
    constructor(props)
    {
        super(props);/*informado na chamada do componente
         result - nome do no que desejado se achado
         no - o no no qual se encontra
         abertos - lista de abertos
         fechados - lista de fechados
        */
        this.AddListaAbertos = this.AddListaAbertos.bind(this);
        this.RemoveListaAbertos = this.RemoveListaAbertos.bind(this);
        this.AddListaFechados = this.AddListaFechados.bind(this);
        this.VerificaListaDeFechados = this.VerificaListaDeFechados.bind(this);
    }
    VerificaListaDeFechados(noProcurado)
    {/** Retorna verdadeiro caso o nó seja encontrado
        e falso caso não
        */
        if(this.props.fechados === undefined)
        {
            return false;
        }
        else
        {
            for(var i=0;i< this.props.fechados.length;i++)
            {
                if(this.props.fechados[i] === noProcurado)
                    return true;
            }
            return false;
        }
    }
    AddListaAbertos()
    {
        if(this.props.abertos === undefined)
        {
            this.props.abertos = new Array();            
        }

        if(!this.VerificaListaDeFechados(this.props.no.baixo))
        {
            this.props.abertos.push(this.props.no.baixo);
        }
        if(!this.VerificaListaDeFechados(this.props.no.esquerda))
        {
            this.props.abertos.push(this.props.no.esquerda);
        }
        if(!this.VerificaListaDeFechados(this.props.no.cima))
        {
            this.props.abertos.push(this.props.no.cima);
        }
        if(!this.VerificaListaDeFechados(this.props.no.direita))
        {
            this.props.abertos.push(this.props.no.direita);
        }
    }
    RemoveListaAbertos()
    {
        var encontro =false;
        if(this.props.abertos !== undefined)
        {
            for(var i=this.props.abertos.length; i > 0 ;i--)
            {
                if(this.props.abertos[i] === this.props.no)
                    encontro = true;

                if(encontro)
                    this.props.abertos[i] = this.props.abertos[i+1];
            }
        }   
        if(encontro)
            this.props.abertos.pull();
    }
    AddListaFechados()
    {
        if(this.props.fechados === undefined)
        {
            this.props.fechados = new Array();
        }

        this.props.fechados.push(this.props.no);

    }

    render()
    {//Varredura será feita aqui

        if(this.props.no === undefined)
        {
            return (
                <div>
                    <p style={{color:'red'}}>Houve um Erro, o no veio vazio, busca Interrompida!</p>
                </div>
            );
        }

        this.AddListaAbertos();
        this.RemoveListaAbertos();
        this.AddListaFechados();
        
        if(this.props.no.nome === this.props.result ){//||  !this.VerificaListaDeFechados(this.props.no)){
            return(
                <div>
                    <h2 style={{color:'green'}}>{this.props.no.nome}</h2>
                </div>
            );
        }else
        {
            return(
                <div>
                    {this.props.no.nome}<br/>
                    &ensp;{this.VerificaListaDeFechados(this.props.no.ligacao.baixo) === false && this.props.no.ligacao.baixo !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.baixo} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    &ensp;{!this.VerificaListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.esquerda} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    &ensp;{this.VerificaListaDeFechados(this.props.no.ligacao.cima) === false && this.props.no.ligacao.cima !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.cima} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    &ensp;{!this.VerificaListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.direita} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    
                </div>
            );
        }
    } 


}
 /** 
  * &ensp;{!this.VerificaListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.esquerda} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
  * &ensp;{!this.VerificaListaDeFechados(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.cima} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    &ensp;{!this.VerificaListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.direita} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result}/>}
                    
  * <div>
        {this.props.no.nome}
        {this.props.no.ligacao.direita !== undefined && <BuscaEmProfundidade no={this.props.no.ligacao.direita} />}
        
    </div>
    */