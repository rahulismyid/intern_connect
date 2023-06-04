import React, { useState } from "react";
import styled from "styled-components";

interface Post {
  id: number;
  author: string;
  content: string;
  comments: string[];
}

const DiscussionForum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "John Doe",
      content: "This is the first post",
      comments: ["Comment 1", "Comment 2"],
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Check out this interesting topic!",
      comments: ["Great post!", "I have a question."],
    },
    // Add more posts here...
  ]);

  const handleComment = (postId: number, comment: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <Container>
      <h2>Discussion Forum</h2>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          <CommentContainer>
            {post.comments.map((comment, index) => (
              <Comment key={index}>{comment}</Comment>
            ))}
          </CommentContainer>
          <CommentInputContainer>
            <CommentInput type="text" placeholder="Add a comment..." />
            <CommentButton
              onClick={() => handleComment(post.id, "New comment")}
            >
              Comment
            </CommentButton>
          </CommentInputContainer>
        </PostContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentContainer = styled.div`
  margin-top: 8px;
`;

const Comment = styled.p`
  margin-bottom: 8px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const CommentInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 4px;
  padding: 8px;
`;

const CommentButton = styled.button`
  background-color: #0077b5;
  border: none;
  color: #ffffff;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
`;

export default DiscussionForum;
