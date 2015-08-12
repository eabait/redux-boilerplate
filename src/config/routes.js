import React from 'react';
import {Route} from 'react-router';
import App from '../views/app/App';
import Home from '../views/home/Home';
import Wiki from '../views/wiki/Wiki';
import Form from '../views/form/Form';
import NotFound from '../views/notFound/NotFound';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/wiki" component={Wiki}/>
    <Route path="/form" component={Form}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
