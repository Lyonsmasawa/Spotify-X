import React from 'react';
import './Header.css';
import Search from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {

    const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className='header'>
        <div className="header__left">
            <Search />
            <input type="text"
            placeholder='Search for Artists, Songs or podcasts'
            />
        </div>
        <div className="header__right">
            <Avatar src='' alt="Lyons"/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header