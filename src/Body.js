import { MoreHoriz, Favorite, PlayCircleFilled } from '@mui/icons-material';
import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'

function Body({ spotify }) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="" srcset="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
      </div>

      <div className="body__songs">
          <div className="body__icons">
                <PlayCircleFilled className='body__shuffle'/>
                <Favorite />
                <MoreHoriz />
          </div>
      </div>
    </div>
  ) 
} 

export default Body