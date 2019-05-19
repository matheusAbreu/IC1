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
        this.VerificarListaAbertos = this.VerificarListaAbertos.bind(this);
        this.VerificaListaDeFechados = this.VerificaListaDeFechados.bind(this);
        this.VerificarListaDeFechadosPeloNome = this.VerificarListaDeFechadosPeloNome.bind(this);
        this.EvitandoDivorcio = this.EvitandoDivorcio.bind(this);
    }
    EvitandoDivorcio()
    {/** Está função procura no no em questão se algum de seus filhos é solução
        Caso seja: true(Um filho solução, resolve qualquer problema)
        Caso não: nem case, continue procurando*/
        if(this.props.no.ligacao.baixo !== undefined)
        {
            if(this.props.result === this.props.no.ligacao.baixo.nome)
            {
                return true;
            }
        }
        if(this.props.no.ligacao.esquerda !== undefined)
        {
            if(this.props.result === this.props.no.ligacao.esquerda.nome)
            {
                return true;
            }
        }
        if(this.props.no.ligacao.cima !== undefined)
        {
            if(this.props.result === this.props.no.ligacao.cima.nome)
            {
                return true;
            }
        }
        if(this.props.no.ligacao.direita !== undefined)
        {
            if(this.props.result === this.props.no.ligacao.direita.nome)
            {
                return true;
            }
        }
        return false;
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
    VerificarListaDeFechadosPeloNome(noProcurado)
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
                if(this.props.fechados[i].nome.trim().toUpperCase() === noProcurado.trim().toUpperCase())
                    return true;
            }
            return false;
        }
    }
    VerificarListaAbertos(noProcurado)
    {
        if(this.props.abertos === undefined)
        {
            return false;
        }
        else
        {
            for(var i=0;i< this.props.abertos.length;i++)
            {
                if(this.props.abertos[i] === noProcurado)
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
        this.props.abertos.pop();
    }
    AddListaFechados()
    {
        this.props.fechados.unshift(this.props.no);
    }
    render()
    {
        //Aquele teste de nulo que é sempre bom ter
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