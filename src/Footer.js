import React from 'react'
import './Footer.css'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
            <p>Albums</p>
        </div>
        <div className="footer__center">
            <p>Player controls</p>
        </div>
        <div className="footer__right">
            <p>Volume controls</p>
        </div>
    </div>
  )
}

export default Footer