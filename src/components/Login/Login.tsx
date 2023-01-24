import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    <form>
        <label htmlFor='email'>E-mail: </label>
        <input type='text' id='email' name='email' />
    </form>
    <Link to="/">Main Page</Link>
    </>
  )
}

export default Login