import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import store from "./store";
import MainPage from "./MainPage";
import ViewPost from "./ViewPost";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
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
      </HashRouter>
    );
  }
}

export default App;
