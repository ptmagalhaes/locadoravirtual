import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import App from '../App'
import SingleMovie from './SingleMovie'
import Error from './Error'

const Router = () => (
    <HashRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/movie/:id" component={SingleMovie}/>
            <Route component={Error} />
        </Switch>
    </HashRouter>
);

export default Router;