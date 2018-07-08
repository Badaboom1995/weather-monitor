import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js'
import Home from '../components/Home.js'
import NotFoundPage from '../components/NotFoundPage.js'



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route component={NotFoundPage}/>
        </Switch>     
    </div>
    </BrowserRouter>
);

export default AppRouter
