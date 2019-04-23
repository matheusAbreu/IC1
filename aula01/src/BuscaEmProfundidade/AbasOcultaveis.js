import React, { Component } from 'react';

var DivState = {open: "Aberta", closed:"Fechada"};

export default class Aba extends Component
{
    constructor(props) 
    {
        super(props);
        this.title = props.title;
        this.text = props.text;
        this.state = {divClass: 'tab-pane fade hidden',
                    estadoDiv: DivState.closed};

        this.OcultandoDivs = this.OcultandoDivs.bind();
    }
    OcultandoDivs(e)
    {
        var teste = this.state.estadoDiv.toString();
       if(teste === 'Fechada')
       {
           this.estadoDiv = DivState.open;
           this.setState({divClass: 'tab-pane fade show active'});
       }
       else
       {
           this.estadoDiv = DivState.closed;
            this.setState({divClass: 'tab-pane fade hidden'});
       }
    }
    render()
    {
        return (
            <div style={{marginTop: '1%'}}>
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                    <li className='nav-item '>
                        <a className='nav-link btn btn-outline-primary active' id='grafo-tab' data-toggle='tab' href='#grafo' role='tab' 
                        aria-controls='div-tab-grafo' onClick={this.OcultandoDivs} aria-selected='true' >{this.title}</a>
                    </li>
                </ul>
                <div className='tab-content' id='myTabContent' >    
                    <div id='div-tab-grafo'  className={this.state.divClass} role='tabpanel' aria-labelledby='grafo-tab' >
                        <div className='row'>
                            {this.text}
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}