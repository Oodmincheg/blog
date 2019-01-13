import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "../store/store";
import MainPage from "./MainPage";
import ViewPost from "./ViewPost";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Route exact path="/" render={() => <MainPage />} />
            <Route
              exact
              path="/posts/:postId"
              render={props => <ViewPost id={props.match.params.postId} />}
            />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
