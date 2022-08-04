import React from 'react'
import './ScreenModal.css'


const ScreenModal = (props) => {
  return (
    <div>
    <div className="backdrop" />
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="action">
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
  </div>
  )
}

export default ScreenModal