import React from 'react';
import {No} from './GrafoComPeso';


export default class Ordenada extends React.Component
{
   constructor(props)
   {
      super(props);
      this.meuGrafo = undefined;

      this.MontandoArvoreResult = this.MontandoArvoreResult.bind(this);
      this.IdentificandoMelhorAvaliado = this.IdentificandoMelhorAvaliado.bind(this);
      this.VerificandoListaFechados = this.VerificandoListaFechados.bind(this);
      this.OrganizaListaAbertos = this.OrganizaListaAbertos.bind(this);
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
                    if(this.props.abertos[i].pesoRelativo > this.props.abertos[j].pesoRelativo)
                    {
                        temp = this.props.abertos[i];
                        this.props.abertos[i] = this.props.abertos[j];
                        this.props.abertos[j] = temp;
                    }
                }    
            }
        }
    }
    AddListaFechados(novoNo)
    {
        if(!this.VerificandoListaFechados(novoNo))
        {
            this.props.fechados.push(novoNo);
        }
    }
    VerificandoListaFechados(noVeri)
    {
        if(this.props.fechados.length > 0)
        {
            for(let i = 0; i < this.props.fechados.length; i++)
            {
                if(this.props.fechados[i].nome === noVeri.nome)
                {
                    return true;
                }
            }
        }
        return false;
    }
   IdentificandoMelhorAvaliado(noNome)
   { 
      //Valores heurística retirados do exemplo em sala
      switch(noNome)
      {
         case 'A': return 0;
         case 'B': return 13;
         case 'C': return 15;
         case 'D': return 7;
         case 'E': return 10;
         case 'F': return 10;
         case 'G': return 0;
      }
   }
   MontandoArvoreResult()
   {
      var resposta = null;
      var sucesso = false;
      var arvResult = new No(this.props.abertos[0].nome);
      var noCandidato = this.props.abertos.shift();
      
      /*while(!sucesso)
      {
      }*/
   }
   render()
   { 
      return(
         <div>
            Hello!
         </div>
      );
   }
}