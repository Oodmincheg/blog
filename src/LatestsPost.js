import React from "react";

import { connect } from "react-redux";
import { getAPILatestsPosts } from "./actionCreators";
import PostDescription from "./PostDescription";

class LatestsPosts extends React.Component {
  componentDidMount() {
    this.props.getPropsLatestsPosts();
  }
  render() {
    return (
      <div className="post-list">
        {this.props.latestsPosts.map(post => (
          <PostDescription post={post} key={post.id} />
        ))}
      </div>
    );
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
