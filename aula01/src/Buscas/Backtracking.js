import React from 'react';

export default class Backtracking extends React.Component 
{
    constructor(props)
    {
        super(props);/*informado na chamada do componente
         result - nome do no que desejado se achado
         no - o no-candidato
         abertos - lista de abertos
         fechados - lista de fechados
        */
        
        /**Acredito que os nomes estão BEM sugestivos do que cada um faz */
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
        this.props.fechados.push(this.props.no);
    }
    render()
    {
        this.AddListaAbertos();
        this.RemoveListaAbertos();
        this.AddListaFechados();
        return(
            <div>
            <p style={{color:'black'}}>{this.props.no.nome}-> ({this.props.abertos.length})</p>

            <div>
                <table >
                    <td>
                        <tr>1
                        </tr>
                    </td>
                    <td>
                        <tr>2
                        </tr>
                    </td>
                    <td>
                        <tr>3
                        </tr>
                    </td>
                    <td>
                        <tr>4
                        </tr>
                    </td>
                </table>
            </div>

        </div>
        );
    }
}

/**
 * {this.CaminhaBacktracking()}
 * {this.props.no.ligacao.direita !== undefined && <Backtracking no={this.props.no.ligacao.direita} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result} />}
 * {this.props.no.ligacao.esquerda !== undefined && <Backtracking no={this.props.no.ligacao.esquerda} abertos={this.props.abertos} fechados={this.props.fechados} result={this.props.result} />}
 */