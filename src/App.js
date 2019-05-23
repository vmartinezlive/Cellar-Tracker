import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/wines/Dashboard'
import WineDetails from './components/wines/WineDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNewWines from './components/wines/CreateNewWines'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <style jsx>{`
      .App{
        background-color: black;
        height: 100vh;
      }
      `}</style>
      <Sidebar/>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wines/:id' component={WineDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateNewWines} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
