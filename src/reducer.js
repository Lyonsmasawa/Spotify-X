export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQDIcFAS4slqj20J6jfQByeEaJl7JGJz66koIsiACpaNm-dygxpB4A4NR1aH6hfPukPOrdhqxoh_3EaiU4syxKj9YMNW5fdCe0ZuFdkIL3NgkHImy_v2aYbgfYzrPbiTuhUsSrQZLQE1CVyo5Jw06k0ZZJzkpFq6v4hI405RXHSSkQKl",
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