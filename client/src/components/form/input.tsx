import React from 'react'

interface InputProps {
  type: string
  placeholder: string
  className?: string
}

const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return <input className={className} type={type} placeholder={placeholder} />
}

export default Input