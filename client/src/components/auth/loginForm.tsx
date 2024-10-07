import React from 'react'

import Input from '../form/input'
import Button from '../form/button'
import FormFooter from '../form/formFooter'

const LoginForm = () => {
  return (
    <div className='login'>
      <p className='sign'>Sign in</p>
      <form className='form'>
        <Input className='username' type='text' placeholder='Username' />
        <Input className='password' type='password' placeholder='Password' />
        <Button className='submit' label='Sign in' />
        <FormFooter
          forgotText='Forgot Password?'
          forgotLink='#'
          signUpText='Not registered?'
          signUpLink='#'
        />
      </form>
    </div>
  )
}

export default LoginForm