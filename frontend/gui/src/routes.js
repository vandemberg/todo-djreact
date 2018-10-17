import React from 'react'
import { Route } from "react-router-dom";

import TODOList from './containers/todolist/TODOListView';
import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TODOList}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
    </div>
);

export default BaseRouter;