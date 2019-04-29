import React, { Component } from 'react';
import Aba from './AbasOcultaveis';
import LittleCard from './LittleCard';
import BuscaP from './BuscaEmProfundidade';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = { baixo: "Baixo", esquerda: "Esquerda", cima: "Cima", direita: "Direita" };
function EscrevendoAlfabeto(numDaLetra)
{
    switch (numDaLetra)
    {
        case 1: return "A"; 
        case 2: return "B"; 
        case 3: return "C";
        case 4:return "D";
        case 5:return "E";
        case 6:return "F";
        case 7:return "G";
        case 8:return "H";
        case 9:return "I";
        case 10:return "J";
        case 11:return "L";
        case 12:return "M";
        case 13:return "N";
        case 14:return "O";
        case 15:return "P";
        case 16:return "Q";
        case 17:return "R";
        case 18:return "S";
        case 19:return "T";
        case 20:return "U";
        case 21:return "V";
        case 22:return "X";
        case 23:return "W";
        case 24:return "Y";
        case 25:return "Z";
        default: return ""; 
    }
}
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
    this.ligacao = {
        esq:'',
        dir:'',
        cima:'',
        baixo:''
    };

    this.NovoNo = function (newNome) 
    {
        this.nome = newNome;
    };
    this.ProcuraNoNasLigacoes = function (nomeDoNo) 
    {
        if (this.listaDeLigamentos.length > 0) 
        {
            for (var i = 0; i < this.listaDeLigamentos.length; i++)
            {
                if (this.listaDeLigamentos[i].nome === nomeDoNo)
                    return this.listaDeLigamentos[i];
            }
        }
        return null;
    };
    this.AddLigamento = function (dir, NoLigado) 
    {
        /*var noTemp = new ligamentos(dir, NoLigado);
        this.listaDeLigamentos.push(noTemp);*/
    }
    this.ImprimaListaDeLigamentos = function () 
    {
        var temp = '';
        if (this.listaDeLigamentos.length > 0) {
            for (var i = 0; i < this.listaDeLigamentos.length; i++)
            {
                temp += this.listaDeLigamentos[i].imprimaLigamento() + '\n|';
            }
            return temp;
        }
    }
    this.ImprimaArvoreDeProfundidade = function ()
    {
        var temp = '';

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
            new no('F'), new no('G'), new no('H'), new no('I'), new no('J'), new no('L'), 
            new no('M'), new no('N'), new no('O'), new no('P'), new no('Q'),
            new no('R'), new no('S')],
            noInicial: '',
            noFinal: '',
            tempDirecao: 'Escolha a Direcao'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChangeNoInicial = this.handleTextChangeNoInicial.bind(this);
        this.handleTextChangeNoFinal = this.handleTextChangeNoFinal.bind(this);
        this.ApontandoDirecao = this.ApontandoDirecao.bind(this);
        this.MontandoGrafoAula = this.MontandoGrafoAula.bind(this);
        this.DuplaLigacao = this.DuplaLigacao.bind(this);
    }
    DuplaLigacao(noUm, dir, noDois)
    {
        
        if(this.state.nos.length > 0)
        {
            for(var i = 0; i < this.state.nos.length; i++) 
            {
                if (this.state.nos[i].nome === noUm.trim().toUpperCase())
                {
                    for(var j= 0; j < this.state.nos.length; j++)
                    {
                        if(this.state.nos[j].nome === noDois.trim().toUpperCase())
                        {
                            this.state.nos[i].AddLigamento(dir, this.state.nos[j]);
                            this.state.nos[j].AddLigamento(IdentificaDirecaoOposta(dir), this.state.nos[i]);    
                        }
                    }
                }
            }
        }
    }
    MontandoGrafoAula(e)
    {
        
       this.DuplaLigacao('A', direcao.direita,'e');
       this.DuplaLigacao('e', direcao.direita, 'i');
       this.DuplaLigacao('i', direcao.direita,'n');
       this.DuplaLigacao('i', direcao.baixo, 'j');
       this.DuplaLigacao('j', direcao.direita, 'o');
       this.DuplaLigacao('o', direcao.direita, 'r');
       this.DuplaLigacao('o', direcao.baixo, 'p');
       this.DuplaLigacao('p', direcao.direita, 's');
       this.DuplaLigacao('p', direcao.baixo, 'q');
       this.DuplaLigacao('q', direcao.esquerda, 'm');
       this.DuplaLigacao('m', direcao.cima, 'l');
       this.DuplaLigacao('l', direcao.esquerda, 'g');
       this.DuplaLigacao('a', direcao.baixo,'B');
       this.DuplaLigacao('b', direcao.baixo, 'c');
       this.DuplaLigacao('b', direcao.direita, 'f');
       this.DuplaLigacao('g', direcao.baixo, 'h');
       this.DuplaLigacao('h', direcao.esquerda, 'd');
       this.setState({... this.state.nos});
    }
    
    ApontandoDirecao(e)
    {
        this.setState({tempDirecao: e.target.value});
    }
    handleSubmit(e) {
             
        
        this.DuplaLigacao(this.state.noInicial, this.state.tempDirecao, this.state.noFinal);
        
        //Limpando o campo text
        this.setState({ noInicial: '', noFinal: '',tempDirecao: 'Escolha a Direcao' });
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
                <div>
                    <button className='btn btn-outline-primary' onClick={this.MontandoGrafoAula}>Montar Grafo Da Aula</button>
                </div>
                <form className='input-group'>
                    
                    <div className='input-group-prepend'>
                            <button className='btn btn-outline-primary' type="submit">Inserir No</button>
                    </div>
                    <input className='form-control' placeholder='Add No (nao funciona ainda)' />
                </form>
                <form className='input-group' onSubmit={this.handleSubmit}>
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

                    <input className='form-control' placeholder='No Final' 
                    style={{ width: '9rem', paddingLeft: '1rem' }} value={this.state.noFinal} 
                    onChange={this.handleTextChangeNoFinal} />
                    <div className='input-group-prepend'>
                        <button className='btn btn-outline-primary' type="submit">Inserir Ligacao</button>
                    </div>
                </form>
               
                <Aba title={this.props.title} index={this.state.nos.length} text={this.state.nos.map((nos, index) => {
                        return <LittleCard key={index} title={nos.nome} text={nos.ImprimaListaDeLigamentos()} />
                    })} style={{marginTop: '1%'}}

                    BuscaP={this.state.nos[0]}
                />
            </div>
        );
    }

};