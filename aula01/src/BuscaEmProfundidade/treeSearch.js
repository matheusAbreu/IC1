import React, { Component } from 'react';

var direcao ={baixo: 1, esquerda: 2, cima: 3, direita: 4};

var Ligacao = class Ligacao{
    constructor()
    {
        this.nome = new List();
        this.direcao = new List();
    }
    constructor(noNome, noDirecao)
    {
        this.nome = new List();
        this.nome.add(noNome);
        this.direcao = new List();
        this.direcao.add(noDirecao);
    }
    AddLigacao(noNome,noDirecao) {
        this.nome.add(noNome);
        this.direcao.add(noDirecao);
    }
};
var noArvore = class noArvore{
    constructor()
    {
        this.nome = "";
        this.ligacao = new Ligacao();
    }
    constructor(nome, ligacao)
    {
        this.nomeDoNo = nome;
        this.ligacao = ligacao;
    }
    AddLigacaoNo(noNome, noDirecao)
    {
        this.ligacao.AddLigacao(noNome,noDirecao);
    }
};
var noGrafo = class noGrafo {
    constructor(listaNo, nomeDoGrafo){
        this.listaDeNos = listaNo;
        this.nome = nomeDoGrafo;
    }
};



export default TreeSearch;