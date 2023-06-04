import styled from "styled-components";

export const FeedsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostDiv = styled.div`
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(50% - 16px);
  @media (max-width: 768px) {
    .post {
      width: 100%;
    }
  }
`;

export const PostHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const PostFooterDiv = styled.div``;

export const AuthorAvatarDiv = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const LikeButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #0077b5;
`;

export const CommentsDiv = styled.div`
  margin-top: 8px;
`;

export const CommentsInputDiv = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const CommentInput = styled.input`
  input[type="text"] {
    flex: 1;
    border: none;
    border-radius: 4px;
    padding: 8px;
  }

  button {
    background-color: #0077b5;
    border: none;
    color: #ffffff;
    padding: 8px;
    margin-left: 8px;
    cursor: pointer;
  }
`;
