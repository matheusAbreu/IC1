import React from 'react';
import Ordenada from './Ordenada';

class ArvorePesada 
{
    constructor(meuNo, pesoAteAqui)
    {
        this.no = meuNo;

        this.pesoRelativo = pesoAteAqui;
        this.arvoreDeCaminha = [];
    }
    AddNosNoCaminho(noFilho, pesoDoNoFilho)
    {
        var tempNo = new ArvorePesada(noFilho, (pesoDoNoFilho + this.pesoRelativo));
        this.arvoreDeCaminha.push(tempNo);
    }
}

export default class AEstrela extends Ordenada
{
   constructor(props)
   {
      super(props);
      this.arvResult = undefined;

      this.OrganizaListaAbertos = this.OrganizaListaAbertos.bind(this);
      this.MontandoArvoreGulosaResult = this.MontandoArvoreGulosaResult.bind(this);
      this.ValorHeuristico = this.ValorHeuristico.bind(this);
   }
   ValorHeuristico(noNome)
   {
      switch(noNome)
      {
         case 'A': return 24;
         case 'B': return 15;
         case 'C': return 22;
         case 'D': return 12;
         case 'E': return 7;
         case 'F': return 7;
         case 'G': return 0;
      }
   }
   OrganizaListaAbertos()
   {
      let temp;
      if(this.props.abertos.length > 0)
      {
         for(let i=0;i < this.props.abertos.length; i++)
         {
               for(let j=this.props.abertos.length-1; j > i; j--)
               {
                  if((this.props.abertos[i].pesoRelativo + this.ValorHeuristico(this.props.abertos[i].no.nome)) >
                      (this.props.abertos[j].pesoRelativo + this.ValorHeuristico(this.props.abertos[j].no.nome)))
                  {
                     temp = this.props.abertos[i];
                     this.props.abertos[i] = this.props.abertos[j];
                     this.props.abertos[j] = temp;
                  }
               }    
         }
      }
   }
   MontandoArvoreGulosaResult()
   {
      var noCandidato = new ArvorePesada(this.props.abertos.shift(), 0);
      var arvResult = noCandidato;
      var indexcorr = 0;
      if(noCandidato.no !== undefined){
         
          while(true) // xgh brabão aqui
          {
              if(noCandidato.no !== undefined && noCandidato.no.nome === this.props.result)
              {
                  return arvResult;
              }
              else
              {
                  if(!this.VerificandoListaFechados(noCandidato.no))
                  {
                      this.AddListaFechados(noCandidato.no);
                      for(let i=0; i < noCandidato.no.listaLigacao.length ;i++)
                      {
                          if(!this.VerificandoListaFechados(noCandidato.no.listaLigacao[i].noLigado))
                          {
                              noCandidato.AddNosNoCaminho(noCandidato.no.listaLigacao[i].noLigado, noCandidato.no.listaLigacao[i].pesoLigacao);
                              this.AddListaAbertos(noCandidato.arvoreDeCaminha[i - indexcorr]);
                          }
                          else
                          {
                              indexcorr++;
                          }
                      }
                  }
                  indexcorr = 0;
                  this.OrganizaListaAbertos();
              }
              if(this.props.abertos.length > 0)
              {
                  noCandidato = this.props.abertos.shift();
              }
              else
              {
                  break;
              }
          }
      }
      return arvResult;  
   }
   render()
   {
      this.arvResult = this.MontandoArvoreGulosaResult();
      return(
         <div>
            {this.ImprimindoArvorePesada(this.arvResult)}
         </div>
      );
   }
}