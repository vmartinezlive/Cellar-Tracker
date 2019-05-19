import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/wines/Dashboard'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar/>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
