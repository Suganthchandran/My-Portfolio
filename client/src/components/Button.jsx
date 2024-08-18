import React from 'react'
import '../styles/Button.css'

export const Button = (props) => {
  return (
    <div>
        <button className="home-btn">{props.name}</button>
    </div>
  )
}
