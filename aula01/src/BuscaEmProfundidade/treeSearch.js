import React, { Component } from 'react';

//enum Direcao  {baixo= 1, esquerda= 2, cima= 3, direita= 4};
var direcao = {baixo= 1, esquerda= 2, cima= 3, direita= 4};

class Ligacao{
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
class noArvore{
    constructor()
    {
        this.nome = "";
        this.ligacao = new Ligacao();
    }
    constructor(nome)
    {
        this.nome = nome;
        this.ligacao = new Ligacao();
    }
    constructor(nome, ligacao = new Ligacao())
    {
        this.nomeDoNo = nome;
        this.ligacao = ligacao;
    }
    AddLigacaoNo(noNome, noDirecao)
    {
        this.ligacao.AddLigacao(noNome,noDirecao);
    }
};
class noGrafo {
    constructor(){
        this.nome = "";
        this.listaDeNos = new List();
    }
    constructor(nomeDoGrafo){
        this.listaDeNos = new List();
        this.nome = nomeDoGrafo;
    }
    addNoGrafo(nomeDoNo)
    {
        var noTemp = new noArvore(nomeDoNo);
        this.listaDeNos.add(notemp);
    }
    addLigacaoEntreNosDoGrafo(primeirNo, direcao, segundoNo)
    {
        
    }
};



export default TreeSearch;