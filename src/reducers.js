import {
  ADD_LATESTS_POSTS,
  ADD_CURRENT_POST,
  SET_COMMENT_TEXT
} from "./actions";
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

const commentText = (state = "", action) => {
  if (action.type === SET_COMMENT_TEXT) {
  }
  return commentText;
};
const rootReducer = combineReducers({
  latestsPosts,
  currentPost,
  commentText
});

export default rootReducer;
