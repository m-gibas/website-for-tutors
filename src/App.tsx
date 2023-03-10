import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Tile from './components/Tile';
import Tutors from './components/Tutors';
import Register from './components/Register';
import AboutTutor from './components/AboutTutor';
import About from './components/About/About';


export interface TutorsProps {
  id: number
  name: string
  surname: string
  imgPath: string
  short_desc: string
}

// tutors: obrazek, imie, nazwisko, krótki opis 
// + później można przejść do szczegółów po kliknięciu na niego i tam np dostępne kursy, dłuższy opis etc 
function App() {
  const [tutors, setTutors] = useState([{
    id: 1,
    name: "Giselle",
    surname: "Stanev",
    imgPath: "female-1.png",
    short_desc: "Math teacher"
  },
  {
    id: 2,
    name: "Adelyn",
    surname: "Soler",
    imgPath: "female-2.png",
    short_desc: "Physics teacher"
  },
  {
    id: 3,
    name: "Destinee",
    surname: "Martinović",
    imgPath: "female-3.png",
    short_desc: "Biology teacher"
  },
  {
    id: 4,
    name: "Bernardo",
    surname: "Brunty",
    imgPath: "male-1.png",
    short_desc: "Chemistry teacher"
  },
  {
    id: 5,
    name: "Onyekachi",
    surname: "Nylund",
    imgPath: "male-2.png",
    short_desc: "Personal trainer"
  }] as TutorsProps[])

  // // for background mouse tracking (glowing cursor effect)
  // const [mousePosition, setMousePosition] = useState({});

  // useEffect (() => {
  //   const handleMouseMove = (event: any) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY });
  //   }

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener(
  //       'mousemove',
  //       handleMouseMove
  //     )
  //   }
  // }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="container">
            <Link to="/register" className="mainpage-link"><Tile text='Log in' /></Link>
            <Link to="/tutors" className="mainpage-link"><Tile text='Tutors' /></Link>
            <Link to="/about" className="mainpage-link"><Tile text='About' /></Link>
          </div>
        }/>
        <Route path='/register' element={ <Register /> } />
        <Route path='/tutors' element={ 
          <>
            <Tutors tutors={tutors}/>
          </>
        } />
        <Route path='/tutor/:id' element={ <AboutTutor tutors={tutors}/> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </Router>
  );
}

export default App;
