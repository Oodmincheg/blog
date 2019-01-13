import React from "react";
import { getAPICurrentPost } from "./actionCreators";
import { connect } from "react-redux";
import PostBody from "./PostBody";
import CommentInput from "./CommentInput";

class ViewPost extends React.Component {
  componentDidMount() {
    this.props.getPropsCurrentPost();
  }
  render() {
    const { comments, id, title, body } = this.props.currentPost;
    return (
      <div>
        <PostBody id={id} title={title} body={body} comments={comments} />
        <CommentInput id={id} update={this.props.getPropsCurrentPost} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentPost: state.currentPost };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPropsCurrentPost() {
    console.log("updating");
    dispatch(getAPICurrentPost(ownProps.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPost);
