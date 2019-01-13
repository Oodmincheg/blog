import React from "react";
import { Link } from "react-router-dom";
import { Content, GlobalStyle } from "./MainPage";
import styled from "styled-components";

const P = styled.p`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const PostBody = props => {
  if (props.comments === undefined) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div>
        <GlobalStyle />

        <h1>
          {props.title}
          <Link to={"/"}>
            <span>(main page)</span>
          </Link>
        </h1>
        <Content>
          <p>{props.body}</p>
          <div>
            <h3>Comments:</h3>
            {props.comments.map(comment => (
              <P key={comment.id}>{comment.body}</P>
            ))}
          </div>
        </Content>
      </div>
    );
};

export default PostBody;
