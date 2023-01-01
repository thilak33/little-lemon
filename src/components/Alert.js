import React from 'react'
import '../styles/Component.css'

const Alert = ({error,primary}) => {
  return (
    <div className={`alert-con ${primary}`}>
       <div>{error}</div>
    </div>
  )
}

export default Alert