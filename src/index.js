import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom'
import { CreateStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AfterSubmit from './components/AfterSubmit';
import Order from './Order/Order';
import { userInfo } from 'os';
import UserInfo from './UserInfo/UserInfo';


ReactDOM.render((
 <BrowserRouter>
    <div>
       <Switch>
       <Route exact path="/" component={App}/>
        <Route path="/submit" component={AfterSubmit}/>
        <Route path="/order" component={Order}/>
        <Route path='/userinfo' component={UserInfo}/>
       </Switch>
          
    </div>


 </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

