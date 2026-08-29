import React from 'react'

const Button = ({children,...props}) => {
  return (
    <div>
      <button className='' {...props}>{children}</button>
    </div>
  )
}

export default Button
