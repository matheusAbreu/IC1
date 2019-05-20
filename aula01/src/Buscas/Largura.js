import React from 'react';
import BuscaP from './BuscaEmProfundidade';


export default class Largura extends BuscaP
{
    constructor(props)
    {
        super(props);
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