import React from "react";
import { Link } from "react-router-dom";
import { LI, H2 } from "./Style.js";

const PostDescription = props => {
  const { title, id, body } = props.post;
  const shortText = `${body.substring(0, 50)}...`;
  return (
    <LI>
      <Link to={`/posts/${id}`}>
        <H2>{title}</H2>
      </Link>
      <p>{shortText}</p>
    </LI>
  );
};

export default PostDescription;
