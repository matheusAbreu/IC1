import React from 'react';
//import '..css/App.css';

import {Provider} from 'react-redux';
import Routes from './routes/';
import Store from './store/'

const App = () => {
  return (
    <Provider store={Store}>
        <Routes/>
    </Provider>
  );
}
export default App;
