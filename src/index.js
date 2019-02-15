import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider }from 'react-redux';
import reducer from '../src/Redux/reducer';

import AfterSubmit from './components/AfterSubmit';

// import { userInfo } from 'os';
import UserInfo from './UserInfo/UserInfo';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancer(applyMiddleware(thunk))(createStore)(reducer);


ReactDOM.render((
   <Provider store={store} >
 <BrowserRouter>
     <div>
       <Switch>
       <Route exact path="/" component={App}/>
        <Route path="/submit" component={AfterSubmit}/>
        
        <Route path='/userinfo' component={UserInfo}/>
       </Switch>
          
    </div>
</BrowserRouter>
</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

