import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider>
        <AppContainer store={store}/>
    </Provider>,
    document.getElementById('root'));
