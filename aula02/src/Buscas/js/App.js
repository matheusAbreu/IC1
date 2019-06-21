import React from 'react';
import {Alert} from 'react-bootstrap';
import TabsDasBuscas from './TabsDasBuscas';
import GrafoSemPeso from './Grafo';
import GrafoComPeso from './GrafoComPeso';

function App() {
  return (
    <div >
      <Alert variant={'dark'} style={{textAlign:'center'}}>
        <h3>Inteligencia computacional 1</h3>
      </Alert>
      <TabsDasBuscas 
      title={[
        'Grafo Com Peso',
        'Grafo Sem Peso']}
      conteudo={[
        <GrafoComPeso title={'Grafo'}/>,
        <GrafoSemPeso title={'Grafo'}/>         
          ]} 
          />
      
    </div>
  );
}

export default App;
