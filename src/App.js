import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Route path="*" component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
