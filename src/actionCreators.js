import { ADD_LATESTS_POSTS } from "./actions";

export function addLatestsPosts(posts) {
  console.log("here", posts);
  return { type: ADD_LATESTS_POSTS, payload: posts };
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
