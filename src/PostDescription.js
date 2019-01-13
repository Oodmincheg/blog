import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 18px;
`;

const LI = styled.li`
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
`;

function PostDescription(props) {
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
}

export default PostDescription;
