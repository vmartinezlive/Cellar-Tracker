import React from 'react';
import  { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
