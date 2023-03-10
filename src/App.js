import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navegation/NavBar';
import Home from './components/web-pages/Home';
import Popular from './components/web-pages/Popular';
import PreSale from './components/web-pages/PreSale';


function App() {
  return (
    <React.Fragment>

      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element= { <Home />} exact />
          <Route path='/PreSale' element= {<PreSale />} exact />
          <Route path='/Popular' element= {<Popular />} exact />
        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
