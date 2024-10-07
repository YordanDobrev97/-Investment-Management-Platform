import React from 'react'

import '../../styles/login/index.scss'

function Login() {
  return (
    <div className='login'>
      <p className='sign'>Sign in</p>
      <form className='form'>
        <input className='username' type='text' placeholder='Username' />
        <input className='password' type='password' placeholder='Password' />
        <a className='submit'>Sign in</a>
        <div className='bottom'>
          <p className='forgot'><a href='#' />Forgot Password?</p>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
