import React from 'react'
import './Body.css'
import Header from './Header'

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
          <img src="https://www.spotifyvault.com/m/7f6b3fc83283d616/thul-Discover-Weekly-Generic-Cover.png" alt="" srcset="" />
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