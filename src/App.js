import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
// npm i spotify-web-api-js
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); //dispatch use it to shoot at the data-layer, i.e. change stuff

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash="";
      
      const _token = hash.access_token;

      if (_token) {
        dispatch({
          type: 'SET_TOKEN',
          toke: _token
        })
        spotify.setAccessToken(_token);

        spotify.getMe().then(user => {
          // console.log(user);
          dispatch({
            type: 'SET_USER',
            user: user
          })
        });
      }
      console.log("I have it",token)
  }, []);

  console.log("try", user);
  console.log("try too", token);


  return (
    <div className="App">
      {
        token ? <Player/> : <Login/>
      }
    </div>
  );
}

export default App;
