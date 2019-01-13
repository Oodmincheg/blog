import React from "react";

class CommentInput extends React.Component {
  createComment = this.createComment.bind(this);
  createComment() {
    const body = { postId: this.props.id, body: this.input.value };
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", JSON.stringify(response));
        this.props.update();
      });
  }
  render() {
    return (
      <form onSubmit={this.createComment}>
        <label for="comment">Leave a comment</label>
        <br />
        <textarea
          id="comment"
          rows="5"
          cols="100"
          ref={userInput => (this.input = userInput)}
        />
        <br />
        <input type="submit" value="Post the comment" />
      </form>
    );
  }
}

export default CommentInput;
