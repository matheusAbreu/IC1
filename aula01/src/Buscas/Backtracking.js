import React from 'react';
import BuscaP from './BuscaEmProfundidade';

export default class Backtracking extends BuscaP
{
    constructor(props)
    {
        super(props);
        this.count = this.props.count +1;
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
        this.RemoveListaAbertos();
        this.AddListaFechados();
        this.AddListaAbertos();

        if(this.props.no.nome === this.props.result )
        {
            return(
                    <div style={{color:'green',height:'2rem'}}>
                        <p style={{color:'green',height:'2rem'}}>{this.props.no.nome}</p>
                        <div>
                        <table >
                            <td>
                                <tr><div>1:{this.props.no.ligacao.baixo === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {!this.VerificarListaDeFechados(this.props.no.ligacao.baixo) && this.props.no.ligacao.baixo !== undefined && this.props.no.ligacao.baixo.nome}</div>
                                </tr>
                            </td>
                            <td>
                                <tr><div>2:{this.props.no.ligacao.esquerda === undefined && <p style={{color:'red'}}>nulo</p>}
                                {!this.VerificarListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && this.props.no.ligacao.esquerda.nome}</div>
                                </tr>
                            </td>
                            <td>
                                <tr><div>3:{this.props.no.ligacao.cima === undefined && <p style={{color:'red'}}>nulo</p>}
                                {!this.VerificarListaDeFechados(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined && this.props.no.ligacao.cima.nome}</div>
                                </tr>
                            </td>
                            <td>
                                <tr><div>4:{this.props.no.ligacao.direita === undefined && <p style={{color:'red'}}>nulo</p>}
                                {!this.VerificarListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && this.props.no.ligacao.direita.nome}</div>
                                </tr>
                            </td>
                        </table>
                    </div>

                </div>
            );
        }
        else if(this.VerificarListaDeFechadosPeloNome(this.props.result))
        {
            return (<div></div>);
        }else
        {
            alert(this.props.no.nome);
        return(
                <div>
                    <p style={{color:'black'}}>{this.props.no.nome}</p>

                    <div>
                        <table >
                            <td>
                                <tr>1{this.props.no.ligacao.baixo === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.baixo) && !this.VerificarListaDeFechados(this.props.no.ligacao.baixo) && this.props.no.ligacao.baixo !== undefined && 
                                    <Backtracking no={this.props.no.ligacao.baixo} abertos={this.props.abertos} count={this.props.count +1} fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>2{this.props.no.ligacao.esquerda === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.esquerda) && !this.VerificarListaDeFechados(this.props.no.ligacao.esquerda) && this.props.no.ligacao.esquerda !== undefined && 
                                    <Backtracking no={this.props.no.ligacao.esquerda} abertos={this.props.abertos} count={this.props.count +1} fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                            <td>
                                <tr>3{this.props.no.ligacao.cima === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.cima) && !this.VerificarListaDeFechados(this.props.no.ligacao.cima) && this.props.no.ligacao.cima !== undefined &&
                                    <Backtracking no={this.props.no.ligacao.cima} abertos={this.props.abertos} count={this.props.count +1} fechados={this.props.fechados} result={this.props.result}/>}
                                </tr>
                            </td>
                            <td>
                                <tr>4{this.props.no.ligacao.direita === undefined && <p style={{color:'red'}}>nulo</p>}
                                    {this.VerificarListaAbertos(this.props.no.ligacao.direita) && !this.VerificarListaDeFechados(this.props.no.ligacao.direita) && this.props.no.ligacao.direita !== undefined && 
                                    <Backtracking no={this.props.no.ligacao.direita} abertos={this.props.abertos} count={this.props.count +1} fechados={this.props.fechados} result={this.props.result} />}
                                </tr>
                            </td>
                        </table>
                    </div>

                </div>
            );
        }
    }
}