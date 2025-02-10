import React from 'react'
import '../styles/Button.css'

export const Button = ({ name, onClick }) => {
  return (
    <button className="home-btn" onClick={onClick}>
      {name}
    </button>
  );
};