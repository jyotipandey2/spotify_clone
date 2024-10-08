
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: 'BQCPCGl8dO7O35sRuvubV0X1jT0GkO4xIzce6wBgn8R5xDEVoAnly0czVY_VcMyf45EvrKDHqbOY0vK8Cqr7H4LD2UTL8kebQPv6ChQcVWqBLTqQjtVsWkGW00hc06ZJpNezeY3yzXjufWMi7MQKos0Gt8T6NBqUcoDMUZv3M-N7om0jg37KSLbCks0y_KwTmSl6HSI2jQiKyF0DTw'
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case  'SET_USER':
            return{
                ...state,
                user : action.user,
        };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };    
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };    
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };    
        default:
            return state;
    }
}

export default reducer;