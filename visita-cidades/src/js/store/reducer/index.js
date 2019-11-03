import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import grafoComPeso from './GrafoComPeso';
import grafoSemPeso from './GrafoSemPeso';
import History from '../../routes/history';

export default combineReducers({
   // grafoComPeso,
   // grafoSemPeso,
    router: connectRouter(History),
});