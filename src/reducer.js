export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // remove after dev
    // token: "BQBRJKjdugPQDKtjo0DOiAQPvof1-UCYs7OANP_n_ldXWqMAzwCLca3cmZ1OCaaEF8JXHP9f_vi409gSLSHz0oyaarzBlZAYTg6-nH0tkxlVA8u2hs7taHjpTNvcljCfwjSW6kQH0bIsagcJI--hBLRGv7F_qJFZMhItEDsCee78hUTt",
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
        default:
            return state;
    }
}

export default reducer