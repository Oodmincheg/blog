import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import LatestsPost from "./LatestsPost";

export const GlobalStyle = createGlobalStyle`
    .post-list {
        list-style-type: none;
        display: flex;
        
    }
    body {
        font-family: 'Courier New'
    }
    form {
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    h1 {
      text-align: center
    }
    span {
        font-size: 12px;
        margin-left: 50px
    }
    
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
class MainPage extends React.Component {
  render() {
    return (
      <Content>
        <GlobalStyle />
        <h1>True story blog</h1>
        <LatestsPost />
      </Content>
    );
  }
}

export default MainPage;
