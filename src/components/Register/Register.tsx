import { useState } from 'react'
import './Register.css'
import GoBackButton from '../GoBackButton'

const Register = () => {
    const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className='register-container' >

    <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>

        <form className='register-form register-form-front'>
             <h3>Login form:</h3>
            <label htmlFor='email'>E-mail: </label>
            <input type='text' id='login-email' name='email' placeholder="Type your e-mail" />

            <label htmlFor='password'>Password: </label>
            <input type='password' id='login-password' name='password'  placeholder="Type your password" />

            <input type='submit' value='Log in' className='submit-button' />
        </form>

        <form className='register-form register-form-back'>
            <h3>Registration form:</h3>
            <label htmlFor='email'>E-mail: </label>
            <input type='text' id='register-email' name='email' placeholder="Type your e-mail" />

            <label htmlFor='firstName'>First name: </label>
            <input type='text' id='register-firstName' name='firstName'  placeholder="Type your first name" />

            <label htmlFor='lastName'>Last name: </label>
            <input type='text' id='register-lastName' name='lastName' placeholder="Type your last name" />

            <label htmlFor='password'>Password: </label>
            <input type='password' id='register-password' name='password'  placeholder="Type your password" />

            <input type='submit' value='Register' className='submit-button' />
        </form>

    </div>

    <button className='switch-button' onClick={() => setIsFlipped(!isFlipped)}>Switch to {isFlipped ? 'Log in' : 'Register'}</button>
    <GoBackButton />
    </div>
  )
}

export default Register

