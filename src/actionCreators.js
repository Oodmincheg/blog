import {
  ADD_LATESTS_POSTS,
  ADD_CURRENT_POST,
  SET_COMMENT_TEXT
} from "./actions";

export function addLatestsPosts(posts) {
  return { type: ADD_LATESTS_POSTS, payload: posts };
}
export function addCurrentPost(post) {
  return { type: ADD_CURRENT_POST, payload: post };
}
export function setCommentText(commentString) {
  return { type: SET_COMMENT_TEXT, payload: commentString };
}
export function getAPILatestsPosts() {
  const url = "http://localhost:3001/posts";

  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          dispatch(addLatestsPosts(data));
        },
        error => {
          console.log(error);
        }
      );
}

export function getAPICurrentPost(id) {
  console.log("HERE", id);
  const url = `http://localhost:3001/posts/${id}?_embed=comments`;

  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          dispatch(addCurrentPost(data));
        },
        error => {
          console.log(error);
        }
      );
}
