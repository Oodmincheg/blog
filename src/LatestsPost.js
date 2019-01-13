import React from "react";
import { connect } from "react-redux";
import { getAPILatestsPosts } from "./actionCreators";

class LatestsPosts extends React.Component {
  componentDidMount() {
    this.props.getPropsLatestsPosts();
  }
  render() {
    console.log("in comp", this.props.latestsPosts);
    return (
      <div>
        {this.props.latestsPosts.map(post => (
          <p>{post.body}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestsPosts: state.latestsPosts
  };
};

const mapDispatchToProps = dispatch => ({
  getPropsLatestsPosts() {
    dispatch(getAPILatestsPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestsPosts);
