import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// npm i spotify-web-api-js
function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash="";
      
      const _token = hash.access_token

      if (_token) {
        setToken(_token)
      }
      console.log("I have it",token)
  }, []);

  return (
    <div className="App">
      {
        token ? <h1>I am logged in</h1> : <Login/>
      }
    </div>
  );
}

export default App;
