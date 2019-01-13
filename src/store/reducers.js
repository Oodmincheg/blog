import { ADD_LATESTS_POSTS, ADD_CURRENT_POST } from "./actions";
import { combineReducers } from "redux";

const latestsPosts = (state = [], action) => {
  if (action.type === ADD_LATESTS_POSTS) {
    return action.payload;
  }
  return state;
};

const currentPost = (state = {}, action) => {
  if (action.type === ADD_CURRENT_POST) {
    console.log("reducer", action.payload);
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  latestsPosts,
  currentPost
});

export default rootReducer;
