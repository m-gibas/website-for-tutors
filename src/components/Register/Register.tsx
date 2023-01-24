import { useState } from 'react'
import './Register.css'
import { Link } from "react-router-dom"

const Register = () => {
    const [isFlipped, setIsFlipped] = useState(false)

  return (
    // <div className='register-container' >
    <div className='register-container' >

    <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>

        <form className={`register-form ${isFlipped ? 'register-form--back' : ''}`}>
            <h3>Registration form:</h3>
            <label htmlFor='email'>E-mail: </label>
            <input type='text' id='email' name='email' placeholder="Type your e-mail" />

            <label htmlFor='firstName'>First name: </label>
            <input type='text' id='firstName' name='firstName'  placeholder="Type your first name" />

            <label htmlFor='lastName'>Last name: </label>
            <input type='text' id='lastName' name='lastName' placeholder="Type your last name" />

            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password'  placeholder="Type your password" />

            <input type='submit' value='Register' className='submit-button' />
        </form>

        <form className={`register-form ${isFlipped ? '' : 'register-form--back'}`}>
            <h3>Login form:</h3>
            <label htmlFor='email'>E-mail: </label>
            <input type='text' id='email' name='email' placeholder="Type your e-mail" />

            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password'  placeholder="Type your password" />

            <input type='submit' value='Register' className='submit-button' />
        </form>

    </div>

    <button className='submit-button' onClick={() => setIsFlipped(!isFlipped)}>Switch to {isFlipped ? 'Register' : 'Login'}</button>
    <Link to="/" className="link">Main Page</Link>

    </div>
  )
}

export default Register

