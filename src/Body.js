import React from 'react'
import './Body.css'
import Header from './Header'

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
          <img src="https://i.scdn.co/image/ab6775700000ee85b254071f06759aa4a4f6398b" alt="" srcset="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>description...</p>
          </div>
      </div>
    </div>
  ) 
} 

export default Body