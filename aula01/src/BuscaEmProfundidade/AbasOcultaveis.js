import React, { Component } from 'react';
import BuscaP from './BuscaEmProfundidade';

var DivState = {open: "Aberta", closed:"Fechada"};

export default class Aba extends Component
{
    constructor(props) 
    {
        super(props);
        this.title = props.title;
        this.index = props.index;
        this.state = {divClass: 'tab-pane fade show active', 
                        estadoDiv: DivState.open,
                    };

        this.OcultandoDivs = this.OcultandoDivs.bind(this);
    }
    OcultandoDivs(e)
    {
        if(this.index > 1)
        {
            if(this.state.estadoDiv === DivState.closed)
            {
                this.setState({divClass: 'tab-pane fade show active', estadoDiv:DivState.open});
                e.target.className = 'nav-link btn btn-outline-primary active';
            }
            else
            {
                this.setState({divClass: 'tab-pane fade hidden', estadoDiv:DivState.closed});
                e.target.className = 'nav-link btn btn-outline-primary';
            }
        }else
        {e.target.className = 'nav-link btn btn-outline-primary';}
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
                        <a className='nav-link btn btn-outline-primary' id='BuscaProfun-tab' data-toggle='tab' href='#BuscaProfun' role='tab' 
                        aria-controls='BuscaProfun' onClick={this.OcultandoDivs} aria-selected='true' >BuscaEmProfundidade</a>
                    </li>
                    
                </ul>
                <div className='tab-content' id='myTabContent' >    
                    <div id='div-tab-grafo'  className={this.state.divClass} role='tabpanel' aria-labelledby='grafo-tab' >
                        <div className='row'>
                            {this.props.text}
                        </div>
                    </div>
                    <div id='BuscaProfun' className='tab-pane fade hidden' role='tabpanel' arial-labelledby='BuscaProfun-tab'>
                        <div className='row'>
                           <BuscaP no={this.props.BuscaP}/>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}