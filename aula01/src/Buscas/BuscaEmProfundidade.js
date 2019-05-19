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
        this.EvitandoDivorcio = this.EvitandoDivorcio.bind(this);
        this.AddFilhosListaFechados = this.AddFilhosListaFechados.bind(this);
    }
    EvitandoDivorcio()
    {/** Está função procura no em questão se algum de seus filhos é solução
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
        this.props.abertos.pop();
    }
    AddListaFechados()
    {
        this.props.fechados.unshift(this.props.no);
    }
    AddFilhosListaFechados()
    {
        if(this.props.no.ligacao.baixo !== undefined)
        {
            this.props.fechados.unshift(this.props.no.ligacao.baixo);
        }
        if(this.props.no.ligacao.esquerda !== undefined)
        {
            this.props.fechados.unshift(this.props.no.ligacao.esquerda);
        }
        if(this.props.no.ligacao.cima !== undefined)
        {
            this.props.fechados.unshift(this.props.no.ligacao.cima);
        }
        if(this.props.no.ligacao.direita !== undefined)
        {
            this.props.fechados.unshift(this.props.no.ligacao.direita);
        }
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

        this.RemoveListaAbertos();
        this.AddListaFechados();
        this.AddListaAbertos();

        /**Caso o resultado:
         * seja encontrado: verde
         * caso de erro(tá lá emcima, é  primeiro teste do render): vermelho
         */
        
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
                    <p style={{color:'black'}}>{this.props.no.nome}-> ({this.props.abertos.length})</p>

                    <div>
                        <table >
                            <td>
                                <tr>1{this.props.no.ligacao.baixo === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.baixo) && !this.VerificarListaDeFechados(this.props.no.ligacao.baixo) && this.props.no.ligacao.baixo !== undefined && 
                                    <BuscaEmProfundidade no={this.props.no.ligacao.baixo} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>2{this.props.no.ligacao.esquerda === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.esquerda) && !this.VerificarListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && 
                                    <BuscaEmProfundidade no={this.props.no.ligacao.esquerda} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>3{this.props.no.ligacao.cima === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.cima) && !this.VerificarListaDeFechados(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined &&
                                    <BuscaEmProfundidade no={this.props.no.ligacao.cima} abertos={this.props.abertos}  fechados={this.props.fechados} result={this.props.result}/>}
                                </tr>
                            </td>
                            <td>
                                <tr>4{this.props.no.ligacao.direita === undefined && <p style={{color:'red'}}>nulo</p>}
                                     {this.VerificarListaAbertos(this.props.no.ligacao.direita) && !this.VerificarListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && 
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