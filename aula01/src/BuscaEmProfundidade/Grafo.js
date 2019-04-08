import React, { Component } from 'react';
import LittleCard from './LittleCard';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = {baixo: "baixo", esquerda: "esq", cima: "cima", direita: "direita"};
function ligamentos(myName, dir) {
    this.dir = dir;
    this.nomeDoNo=myName;
    this.imprimaLigamento = function ()        
    {
        var temp = this.dir + ':\n'+this.nomeDoNo;
        return temp;
    }
}

function no(MyName, lista){
    this.nome= MyName;
    this.listaDeLigamentos =lista;

    this.NovoNo = function(newNome)
    {
        this.nome = newNome;
    };
    this.AddLigamento = function(novaDir, noRef)
    {
        var novo = new ligamentos();
        novo.dir = novaDir;
        novo.nomeDoNo = noRef;
        this.listaDeLigamentos.push(novo);
    }
    this.ImprimaListaDeLigamentos = function()
    {
        var temp = '';
        for(var i =0; i < this.listaDeLigamentos.length; i++)
        {
            temp += this.listaDeLigamentos[i].imprimaLigamento() + '\n';
        }
        return temp;
    }
}

export default class Grafo extends Component{

    constructor(props) 
    {
        super(props);
        this.title = "Grafo";
        this.state = {
            nos:[new no('No A', [new ligamentos('No B', direcao.baixo), new ligamentos('No E', direcao.direita) ]),
           new no('No B', [new ligamentos('No A', direcao.cima), new ligamentos('No C', direcao.baixo), new ligamentos('No F', direcao.direita) ])],/*, new no('No B'), new no('No C'), new no('No D'),new no('No E'),
            new no('No F'), new no('No G'), new no('No H'), new no('No I'),new no('No J'),
            new no('No L'), new no('No M'), new no('No N'), new no('No O'),new no('No P'),
            new no('No Q'), new no('No R'), new no('No S')],*/
            novoNo:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleSubmit(e)
	{//atualizando a lista de comentarios
		this.setState({
			nos:[
                ... this.state.nos,
                {text:this.state.novoNo}
			]
		});
		//Limpando o campo text
		this.setState({novoNo:''});
		//Removendo o refresh da pag ao submeter o conteudo
		e.preventDefault();
    }
    handleTextChange(e)
	{/*Alterando o estado da aplicação para que os caracters inseridos na caixa de texto
		fiquem visiveis*/
		this.setState({novoNo: e.target.value});
	}
    render()
    {
        return (
            <div className="container text-center">
            <h2>{this.props.title}</h2>
				<form onSubmit={this.handleSubmit}> 
                <input 
					value={this.state.novoNo} 
					onChange={this.handleTextChange}
					/>
					<button type="submit">Comentar</button>
				</form>
                <div className="row">
                {this.state.nos.map((nos, index)=>{
					return <LittleCard key={index} title={nos.nome} text={nos.ImprimaListaDeLigamentos()}/>
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
            temp.NovoNo("no" + i.toString());
            myList.push(temp);
            myText += "\n";
            myText += myList[i].nome + "->";
        }           
        alert(myText);
}*/