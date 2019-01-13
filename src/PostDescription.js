import React from "react";
import { Link } from "react-router-dom";

function PostDescription(props) {
  const { title, id } = props.post;
  return (
    <div>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default PostDescription;
