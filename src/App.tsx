import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tile from './components/Tile';
import Tutors from './components/Tutors';
import Register from './components/Register';


export interface TutorsProps {
    id: number
    imgPath: string
}

// tutors: obrazek, imie, nazwisko, krótki opis 
// + później można przejść do szczegółów po kliknięciu na niego i tam np dostępne kursy, dłuższy opis etc 
function App() {
  const [tutors, setTutors] = useState([{
    id: 1,
    imgPath: "female-1.png"
  },
  {
    id: 2,
    imgPath: "female-2.png"
  },
  {
    id: 3,
    imgPath: "female-3.png"
  },
  {
    id: 4,
    imgPath: "male-1.png"
  },
  {
    id: 5,
    imgPath: "male-2.png"
  }] as TutorsProps[])


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="container">
            <Link to="/register" className="mainpage-link"><Tile text='Log in' /></Link>
            <Link to="/tutors" className="mainpage-link"><Tile text='Tutors' /></Link>
            <Link to="/about" className="mainpage-link"><Tile text='About' /></Link>
            <Link to="/about" className="mainpage-link"><Tile text='About' /></Link>
          </div>
        }/>
        <Route path='/register' element={ <Register /> } />
        <Route path='/tutors' element={ 
        <>
          <Tutors tutors={tutors}/>
        </>
    } />
        <Route path='/about' element={ <p>About page <Link to="/">Main Page</Link></p> } />
      </Routes>
    </Router>
  );
}

export default App;
