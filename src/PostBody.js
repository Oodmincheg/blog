import React from "react";

const PostBody = props => {
  if (props.comments === undefined) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <div>
          <h3>Comments</h3>
          {props.comments.map(comment => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </div>
      </div>
    );
};

export default PostBody;
