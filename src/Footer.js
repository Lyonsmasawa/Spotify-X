import React from 'react'
import './Footer.css'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import { PlaylistPlay, VolumeDown } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
            <p>Albums</p>
        </div>
        <div className="footer__center">
            <ShuffleIcon className='footer__green'/>
            <SkipPreviousIcon className='footer__icon'/>
            <PlayCircleOutlineIcon className='footer__icon' fontSize='large'/>
            <SkipNextIcon className='footer__icon'/>
            <RepeatIcon className='footer__green'/>
        </div>
        <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer