import React from 'react';
import {Alert} from 'react-bootstrap';
import TabsDasBuscas from './TabsDasBuscas';
import GrafoSemPeso from './Grafo';

function App() {
  return (
    <div >
      <Alert variant={'dark'} style={{textAlign:'center'}}>
        <h3>Inteligencia computacional 1</h3>
      </Alert>
      <TabsDasBuscas 
      title={[
        'Grafo Sem Peso',
          '2',]}
      conteudo={[
        <GrafoSemPeso title={'Grafo'}/>,
         'vai que',
          ]} 
          />
      
    </div>
  );
}

export default App;
