// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint = 
"https://accounts.spotify.com/authorize/";

const redirectUri = "http://localhost:3000/";
const clientId = "d6daa6d0cc0240e6b8b7c6638a56522a";

const scopes = [
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-read-currently-playing",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`