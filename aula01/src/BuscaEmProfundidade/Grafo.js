import React, { Component } from 'react';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = { baixo: "baixo", esquerda: "esq", cima: "cima", direita: "direita" };
function ligamentos(myName, dir) {
    this.dir = dir;
    this.nomeDoNo = myName;
    this.imprimaLigamento = function () {
        var temp = this.dir + ':\n' + this.nomeDoNo;
        return temp;
    }
}

function no(MyName, lista = new Array()) {
    this.nome = MyName;
    this.listaDeLigamentos = lista;

    this.NovoNo = function (newNome) {
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
    this.AddLigamento = function (dir, NoLigado) {
        var noTemp = new ligamentos(dir, '');
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

export default class Grafo extends Component {

    constructor(props) {
        super(props);
        this.title = "Grafo";
        this.state = {
            nos: [new no('A'), new no('B'), new no('C'), new no('D'), new no('E'),
            new no('F'), new no('G'), new no('H'), new no('I'), new no('J'), new no('K'),
            new no('L'), new no('M'), new no('N'), new no('O'), new no('P'), new no('Q'),
            new no('R'), new no('S')],
            noInicial: '',
            noFinal: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChangeNoInicial = this.handleTextChangeNoInicial.bind(this);
        this.handleTextChangeNoFinal = this.handleTextChangeNoFinal.bind(this);
    }
    handleSubmit(e) {//atualizando a lista de comentarios
		/*this.setState({
			nos:[
                ... this.state.nos,
                {text:this.state.noInicial}
			]
        });*/
        var localNoInicio = this.state.noInicial.toUpperCase(), 
        localNoFinal = this.state.noFinal.toUpperCase();
        
        if(this.state.nos.length > 0)
        {
            for (var i = 0; i < this.state.nos.length; i++) {
                if (this.state.nos[i].nome === localNoInicio)
                {
                    for (var j= 0; j < this.state.nos.length; j++)
                    {
                        if(this.state.nos[i].nome === localNoFinal)
                        {
                            
                        }
                    }
                    break;
                }
            }
        }
        //Limpando o campo text
        this.setState({ noInicial: '' });
        this.setState({ noFinal: '' });
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
                    <input className='form-control' placeholder='No de Inicio' 
                    style={{ width: '9rem', paddingLeft: '1rem', margin: '0' }} value={this.state.noInicial} 
                    onChange={this.handleTextChangeNoInicial} />

                    <div className='dropdown input-group-prepend'>
                        <button id='dirDropdown' className='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            Escolha a Direcao
                        </button>
                        <div className='dropdown-menu' aria-labelledby='dirDropdown'>
                            <button className='dropdown-item' type='button' value={direcao.direita}>Direita</button>
                            <button className='dropdown-item' type='button' value={direcao.esquerda}>Esquerda</button>
                            <button className='dropdown-item' type='button' value={direcao.cima}>Para Cima</button>
                            <button className='dropdown-item' type='button' value={direcao.baixo}>Para Baixo</button>
                        </div>
                    </div>

                    <input className='form-control' placeholder='No Final' style={{ width: '9rem', paddingLeft: '1rem' }} value={this.state.noFinal} onChange={this.handleTextChangeNoFinal} />
                    <div className='input-group-prepend'>
                        <button className='btn btn-outline-primary' type="submit">Inserir Ligacao</button>
                    </div>
                </form>

                <div className='row'>
                    {this.state.nos.map((nos, index) => {
                        return <LittleCard key={index} title={nos.nome} text={nos.ImprimaListaDeLigamentos()} />
                    })}
                </div>

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
}*/