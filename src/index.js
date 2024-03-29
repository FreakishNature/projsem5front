import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './style/index.css';
import App from './components/App';
import ProjectReview from './components/ProjectReview';
import * as serviceWorker from './serviceWorker';


const routing = (
    <BrowserRouter >
        <div>
            <Switch>
                <Route path="/project" component={ProjectReview} />
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter >
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
