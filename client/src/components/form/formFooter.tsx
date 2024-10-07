import React from 'react'

interface FormFooterProps {
  forgotText: string
  forgotLink: string
  signUpText: string
  signUpLink: string
}

const FormFooter: React.FC<FormFooterProps> = ({ forgotText, forgotLink, signUpText, signUpLink }) => {
  return (
    <div className='form-footer'>
      <p className='forgot'>
        <a href={forgotLink}>{forgotText}</a>
      </p>
      <p className='message'>
        {signUpText} <a href={signUpLink}>Create an account</a>
      </p>
    </div>
  )
}

export default FormFooter