import React from "react";

const Comments = props => {
  return (
    <div>
      <h2>Comments</h2>
      {props.comments.map(comment => (
        <p>{comment.body}</p>
      ))}
    </div>
  );
};

export default Comments;
