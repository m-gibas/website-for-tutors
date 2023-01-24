import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tile from './components/Tile';
import Tutors from './components/Tutors';
import Register from './components/Register';
import Login from './components/Login';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="container">
            <Link to="/register" className="link"><Tile text='Register' /></Link>
            <Link to="/login" className="link"><Tile text='Log in' /></Link>
            <Link to="/tutors" className="link"><Tile text='Tutors' /></Link>
            <Link to="/about" className="link"><Tile text='About' /></Link>
          </div>
        }/>
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/tutors' element={ <Tutors />} />
        <Route path='/about' element={ <p>About page <Link to="/">Main Page</Link></p> } />
      </Routes>
    </Router>
  );
}

export default App;
