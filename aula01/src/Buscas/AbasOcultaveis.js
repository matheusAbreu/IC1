import React, { Component } from 'react';
import BuscaP from './BuscaEmProfundidade';
import Backtracking from './Backtracking';
import Largura from './Largura';

var DivState = {grafo:'Grafo-tab', BuscaP:'Profundidade-tab', Back:'Backtracking-tab', Larg:'Largura-tab'};

export default class Aba extends Component
{
    constructor(props) 
    {
        super(props);
        this.title = props.title;
        this.index = props.index;
        this.state = {divClass: 'tab-pane fade show active', 
                        estadoDiv: DivState.grafo,
                    };

        this.OcultandoDivs = this.OcultandoDivs.bind(this);
    }
    OcultandoDivs(e)
    {
        if(this.index > 1)
        {
            switch(e.target.ID)
            {
                case(DivState.grafo):
                    this.setState({divClass: 'tab-pane fade show active', estadoDiv:DivState.grafo});
                break;

                case(DivState.BuscaP):
                    this.setState({divClass: 'tab-pane fade show active', estadoDiv:DivState.BuscaP});
                break;

                case(DivState.Back):
                    this.setState({divClass: 'tab-pane fade show active', estadoDiv:DivState.Back});
                break;

                case(DivState.Larg):
                    this.setState({divClass: 'tab-pane fade show active', estadoDiv:DivState.Larg});
                break;
            }
        }
    }
    render()
    {
        return (
            <div>
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                    <li className='nav-item '>
                        <a className='nav-link btn btn-outline-primary' id='grafo-tab' data-toggle='tab' href='#div-tab-grafo' role='tab' 
                        aria-controls='div-tab-grafo' onClick={this.OcultandoDivs} aria-selected='true' >{this.title}</a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link btn btn-outline-primary' id='Profundidade-tab' data-toggle='tab' href='#Profundidade' role='tab' 
                        aria-controls='Profundidade' onClick={this.OcultandoDivs} aria-selected='true' >BuscaEmProfun</a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link btn btn-outline-primary' id='Backtracking-tab' data-toggle='tab' href='#Backtracking' role='tab' 
                        aria-controls='Backtracking' onClick={this.OcultandoDivs} aria-selected='true' >Backtracking</a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link btn btn-outline-primary' id='Largura-tab' data-toggle='tab' href='#Largura' role='tab' 
                        aria-controls='Largura' onClick={this.OcultandoDivs} aria-selected='true' >Largura</a>
                    </li>
                </ul>
                <div className='tab-content' id='myTabContent' >    
                    <div id='div-tab-grafo'  className={this.state.divClass} role='tabpanel' aria-labelledby='grafo-tab' >
                        <div className='row'>
                            {this.props.text}
                        </div>
                    </div>
                    <div id='Profundidade' className='tab-pane fade hidden' role='tabpanel' arial-labelledby='Profundidade-tab'>
                        <div className='row'>
                           <BuscaP no={this.props.BuscaP} abertos={[]} fechados={[]} result={'S'} />
                        </div>
                    </div>
                    <div id='Backtracking' className='tab-pane fade hidden' role='tabpanel' arial-labelledby='Backtraking-tab'>
                        <div className='row'>
                           <Backtracking no={this.props.BuscaP} abertos={[]} fechados={[]} result={'S'} />
                        </div>
                    </div>
                    <div id='Largura' className='tab-pane fade hidden' role='tabpanel' arial-labelledby='Largura-tab'>
                            <Largura no={this.props.BuscaP} abertos={[]} fechados={[]} result={'M'} />
                    </div>
                </div>    
            </div>
        );
    }
}