import { useEffect } from 'react';
import './App.css';
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";

function App() {
  useEffect(() => {
      const token = getTokenFromUrl();
      console.log("I have it",token)
  }, []);

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
