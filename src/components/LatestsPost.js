import React from "react";

import { connect } from "react-redux";
import { getAPILatestsPosts } from "../store/actionCreators";
import PostDescription from "./PostDescription";

class LatestsPosts extends React.Component {
  componentDidMount() {
    this.props.getPropsLatestsPosts();
  }
  render() {
    if (!this.props.latestsPosts.length) {
      console.log("HEEEEEEEEREEEEEEEE");
      return <h1>oooooops...</h1>;
    } else {
      return (
        <div className="post-list">
          {this.props.latestsPosts.map(post => (
            <PostDescription post={post} key={post.id} />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  latestsPosts: state.latestsPosts
});

const mapDispatchToProps = dispatch => ({
  getPropsLatestsPosts() {
    dispatch(getAPILatestsPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestsPosts);
