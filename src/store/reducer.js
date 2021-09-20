import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from '../pages/player/store'
import { reducer as albumReducer } from '../pages/discover/c-pages/album/store'
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as djRadioReducer } from '../pages/discover/c-pages/djradio/store'
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  album: albumReducer,
  songs: songsReducer,
  djRadio: djRadioReducer
})

export default cReducer