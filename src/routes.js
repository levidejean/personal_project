import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Picker from './components/Picker/Picker';
import Signup from './components/Signup/Signup';
import Review from './components/Review/Review';


export default (
    <Switch>
    <Route exact path= "/" component={Login} />
    <Route path="/picker" component={Picker} />
    <Route path="/sign-up" component={Signup} />
    <Route path="/review" component={Review} />
    </Switch>
)