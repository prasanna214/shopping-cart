import {createStore} from 'redux';
import reducer from './reducer'

const initialState = {products: []} ;

const store = createStore( reducer, initialState);
export default store;
