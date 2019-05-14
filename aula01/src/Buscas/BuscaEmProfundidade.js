import React from 'react';

export default class BuscaEmProfundidade extends React.Component 
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
        this.VerificarListas = this.VerificarListas.bind(this);
        this.VerificarListaDeFechados = this.VerificarListaDeFechados.bind(this);
        this.VerificarListaDeFechadosPeloNome = this.VerificarListaDeFechadosPeloNome.bind(this);
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
    
    VerificarListaDeFechados(noProcurado)
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
    VerificarListas(noProcurado)
    {
        return ( this.VerificarListaAbertos(noProcurado) || this.VerificarListaDeFechados(noProcurado));
    }
    AddListaAbertos()
    {
        if(!this.VerificarListas(this.props.no.ligacao.baixo) && this.props.no.ligacao.baixo !== undefined)
        {
            this.props.abertos.push(this.props.no.ligacao.baixo);
        }
        if(!this.VerificarListas(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined)
        {
            this.props.abertos.push(this.props.no.ligacao.esquerda);
        }
        if(!this.VerificarListas(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined)
        {
            this.props.abertos.push(this.props.no.ligacao.cima);
        }
        if(!this.VerificarListas(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined)
        {
            this.props.abertos.push(this.props.no.ligacao.direita);
        }
        //alert(this.props.abertos.length);
    }
    RemoveListaAbertos()
    {
        /*var encontro = false;
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
        if(encontro)*/
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

        /**Comportamento da busca em profundidade em si, nota:
         * O no-candidato é passado por parametro, o que facilita muita recursividade
         */
        this.AddListaAbertos();
        this.RemoveListaAbertos();
        this.AddListaFechados();

        /**Caso o resultado:
         * seja encontrado: verde
         * caso de erro(tá lá emcima, é  primeiro teste do render): vermelho
         */
        if(this.props.no.nome === this.props.result )
        {
            return(
                <div>
                    <h2 style={{color:'green',height:'2rem'}}>{this.props.no.nome} -> ({this.props.abertos.length})</h2>
                </div>
            );
        }
        else if(this.VerificarListaDeFechadosPeloNome(this.props.result))
        {
            return (<div></div>);
        }
        else
        {
            return(
                <div>
                    <p style={{color:'black'}}>{this.props.no.nome}-> ({this.props.abertos.length})</p>

                    <div>
                        <table >
                            <td>
                                <tr>1
                                    {!this.VerificarListaDeFechados(this.props.no.ligacao.baixo) && this.props.no.ligacao.baixo !== undefined && 
                                    <BuscaEmProfundidade no={this.props.no.ligacao.baixo} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>2
                                    {!this.VerificarListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && 
                                    <BuscaEmProfundidade no={this.props.no.ligacao.esquerda} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>3
                                    {!this.VerificarListaDeFechados(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined &&
                                    <BuscaEmProfundidade no={this.props.no.ligacao.cima} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result}/>}
                                </tr>
                            </td>
                            <td>
                                <tr>4
                                     {!this.VerificarListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && 
                                    <BuscaEmProfundidade no={this.props.no.ligacao.direita} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                        </table>
                    </div>

                </div>
            );
        }
    } 
}
/** */