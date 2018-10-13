import React from 'react'
import { Route } from "react-router-dom";

import TODOList from './containers/todolist/TODOListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TODOList}/>
    </div>
);

export default BaseRouter;