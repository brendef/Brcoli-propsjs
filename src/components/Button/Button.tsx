import React from 'react'

interface ButtonProps {
  label: string;
}

const Button = ({ 
  label = 'Default button label'
}:ButtonProps) => {
  return <button>{ label }</button>
}

export default Button