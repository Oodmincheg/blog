import { ADD_LATESTS_POSTS } from "./actions";
import { combineReducers } from "redux";

const latestsPosts = (state = [], action) => {
  if (action.type === ADD_LATESTS_POSTS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  latestsPosts
});

export default rootReducer;
