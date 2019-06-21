import React from 'react';
import TabsDasBuscas from './TabsDasBuscas';

function App() {
  return (
    <div >
      <p>Estou funcionando ok!</p>
      <TabsDasBuscas 
      title={[
        '1',
          '2',
            '3',
              '4']}
      conteudo={[
        'sei la',
         'vai que',
          'daCerto',
          'ainda ta simples'
          ]} 
          />
      
    </div>
  );
}

export default App;
