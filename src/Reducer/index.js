import { TOGGLE_DARKTHEME, GET_WEATHER } from "../Constants";
import { combineReducers } from "redux";

const preferences = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    case GET_WEATHER:
      return { ...state, weather: action.payload };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
