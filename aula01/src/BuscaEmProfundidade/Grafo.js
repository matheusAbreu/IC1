import React, { Component } from 'react';
import Abas from './AbasOcultaveis';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = { baixo: "Baixo", esquerda: "Esquerda", cima: "Cima", direita: "Direita" };
function ligamentos(dir,passNo) {
    this.dir = dir;
    this.no = passNo;
    this.imprimaLigamento = function () {
        var temp = this.dir + ':\n' + this.no.nome;
        return temp;
    }
}

function no(MyName, lista = new Array()) {
    this.nome = MyName;
    this.listaDeLigamentos = lista;

    this.NovoNo = function (newNome) 
    {
        this.nome = newNome;
    };
    this.ProcuraNoNasLigacoes = function (nomeDoNo) {
        if (this.listaDeLigamentos.length > 0) {
            for (var i = 0; i < this.listaDeLigamentos.length; i++) {
                if (this.listaDeLigamentos[i].nome == nomeDoNo)
                    return this.listaDeLigamentos[i];
            }
        }
        return null;
    };
    this.AddLigamento = function (dir, NoLigado) 
    {
        var noTemp = new ligamentos(dir, NoLigado);
        this.listaDeLigamentos.push(noTemp);
    }
    this.ImprimaListaDeLigamentos = function () {
        var temp = '';
        if (this.listaDeLigamentos.length > 0) {
            for (var i = 0; i < this.listaDeLigamentos.length; i++) {
                temp += this.listaDeLigamentos[i].imprimaLigamento() + '\n';
            }
            return temp;
        }
    }
}
function IdentificaDirecaoOposta(dir)
{
    switch(dir)
    {
        case direcao.direita: return direcao.esquerda;
        case direcao.esquerda: return direcao.direita;
        case direcao.cima: return direcao.baixo;
        case direcao.baixo: return direcao.cima;
    }
}
export default class Grafo extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.state = {
            nos: [new no('A'), new no('B'), new no('C'), new no('D'), new no('E'),
            new no('F'), new no('G'), new no('H'), new no('I'), new no('J'), new no('K'),
            new no('L'), new no('M'), new no('N'), new no('O'), new no('P'), new no('Q'),
            new no('R'), new no('S')],
            noInicial: '',
            noFinal: '',
            tempDirecao: 'Escolha a Direcao'

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChangeNoInicial = this.handleTextChangeNoInicial.bind(this);
        this.handleTextChangeNoFinal = this.handleTextChangeNoFinal.bind(this);
        this.ApontandoDirecao = this.ApontandoDirecao.bind(this);
    }
    ApontandoDirecao(e)
    {
        this.setState({tempDirecao: e.target.value});
    }
    handleSubmit(e) {
        var localNoInicio = this.state.noInicial.toUpperCase(), 
        localNoFinal = this.state.noFinal.toUpperCase();
        
        if(this.state.nos.length > 0)
        {
            for (var i = 0; i < this.state.nos.length; i++) {
                if (this.state.nos[i].nome === localNoInicio)
                {
                    for (var j= 0; j < this.state.nos.length; j++)
                    {
                        if(this.state.nos[j].nome === localNoFinal)
                        {
                            this.state.nos[i].AddLigamento(this.state.tempDirecao, this.state.nos[j]);
                            this.state.nos[j].AddLigamento(IdentificaDirecaoOposta(this.state.tempDirecao), this.state.nos[i]);
                        }
                    }
                    break;
                }
            }
        }
        //Limpando o campo text
        this.setState({ noInicial: '' });
        this.setState({ noFinal: '' });
        this.setState({tempDirecao: 'Escolha a Direcao'});
        //Removendo o refresh da pag ao submeter o conteudo
        e.preventDefault();
    }
    handleTextChangeNoInicial(e) {/*Alterando o estado da aplicação para que os caracters inseridos na caixa de texto
		fiquem visiveis*/
        this.setState({ noInicial: e.target.value });
    }
    handleTextChangeNoFinal(e) {/*Alterando o estado da aplicação para que os caracters inseridos na caixa de texto
		fiquem visiveis*/
        this.setState({ noFinal: e.target.value });
    }
    render() {
        return (
            <div className="container text-center">
                <h2>{this.props.title}</h2>
                <form className='input-group' onSubmit={this.handleSubmit}>
                    <div className='input-group-prepend'>
                        <button className='btn btn-outline-primary' type="submit">Montar Grafo Da Aula</button>
                    </div>
                    <input className='form-control' placeholder='No de Inicio' 
                    style={{ width: '9rem', paddingLeft: '1rem', margin: '0' }} value={this.state.noInicial} 
                    onChange={this.handleTextChangeNoInicial} />

                    <div className='dropdown input-group-prepend'>
                        <button id='dirDropdown' className='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            {this.state.tempDirecao}
                        </button>
                        <div className='dropdown-menu' aria-labelledby='dirDropdown'>
                            <button className='dropdown-item' type='button' onClick={this.ApontandoDirecao} value={direcao.direita} >{direcao.direita}</button>
                            <button className='dropdown-item' type='button' onClick={this.ApontandoDirecao} value={direcao.esquerda} >{direcao.esquerda}</button>
                            <button className='dropdown-item' type='button' onClick={this.ApontandoDirecao} value={direcao.cima} >{direcao.cima}</button>
                            <button className='dropdown-item' type='button' onClick={this.ApontandoDirecao} value={direcao.baixo} >{direcao.baixo}</button>
                        </div>
                    </div>

                    <input className='form-control' placeholder='No Final' style={{ width: '9rem', paddingLeft: '1rem' }} value={this.state.noFinal} onChange={this.handleTextChangeNoFinal} />
                    <div className='input-group-prepend'>
                        <button className='btn btn-outline-primary' type="submit">Inserir Ligacao</button>
                    </div>
                </form>
                <Abas title={this.props.title} text={this.state.nos.map((nos, index) => {
                        return <LittleCard key={index} title={nos.nome} text={nos.ImprimaListaDeLigamentos()} />
                    })} />
                    

            </div>
        );
    }

};

/*function GeraGrafo(myText)
{
    var temp = new no(), myList = [];
        for(var i = 0; i <10;i++)
        {
            temp.noInicial("no" + i.toString());
            myList.push(temp);
            myText += "\n";
            myText += myList[i].nome + "->";
        }
        alert(myText);
}


               <div style={{marginTop: '1%'}}>
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                        <li className='nav-item '>
                            <a className='nav-link btn btn-outline-primary active' id='grafo-tab' data-toggle='tab' href='#grafo' role='tab' 
                            aria-controls='div-tab-grafo' onClick={this.OcultandoDivs} aria-selected='true' >{this.title}</a>
                        </li>
                    </ul>
                    <div class='tab-content' id='myTabContent' >    
                        <div className='tab-pane fade show active' id='div-tab-grafo'  role='tabpanel' aria-labelledby='grafo-tab' >
                            <div className='row'>
                                {this.state.nos.map((nos, index) => {
                                    return <LittleCard key={index} title={nos.nome} text={nos.ImprimaListaDeLigamentos()} />
                                })}
                            </div>
                        </div>
                    </div>    
                </div>*/