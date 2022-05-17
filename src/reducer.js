export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    }

const reducer = (state, action) => {
    console.log(action)
    // Action has a (type,  [payload])
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, //keep whatever was in the state prevent overwriting.
                user: action.user // update user slice 
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,                
            }

        default:
            return state;
    }
}

export default reducer