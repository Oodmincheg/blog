import React from "react";
import { GlobalStyle, Content } from "./Style.js";
import LatestsPost from "./LatestsPost";

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
