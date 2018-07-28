import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route,Redirect,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './mock/mockServer'
import store from './redux/store'
import './common/css/reset.css'
import App from './containers/app/app'

ReactDOM.render((
    <div className="acc">
       <Provider store={store}>
          <div className="app">
              <HashRouter>
                  <App/>
              </HashRouter>
          </div>
       </Provider>
    </div>
), document.getElementById('root'));
