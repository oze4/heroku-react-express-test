import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navigation from './Components/Navigation';

import About from './Pages/About';
import Books from './Pages/Books';
import Home from './Pages/Home';
import RouteNotFound from './Pages/RouteNotFound';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/books' component={Books}/>
          <Route path='*' component={RouteNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
