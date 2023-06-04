import React, { useState } from "react";
import {
  AuthorAvatarDiv,
  CommentInput,
  CommentsDiv,
  CommentsInputDiv,
  FeedsDiv,
  LikeButton,
  PostDiv,
  PostFooterDiv,
  PostHeaderDiv,
} from "./feeds.styles";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: string[];
}

const feedsData: Post[] = [
  {
    id: 1,
    author: "John Doe",
    content: "This is the content of Post 1",
    likes: 5,
    comments: ["Great post!", "Thanks for sharing!"],
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "Amazing day at the beach!",
    likes: 12,
    comments: ["Looks like a lot of fun!", "Wish I was there."],
  },
  {
    id: 3,
    author: "Mike Johnson",
    content: "Just finished reading a great book!",
    likes: 8,
    comments: ["What's the title?", "Recommend it to me!"],
  },
  {
    id: 4,
    author: "Emily Brown",
    content: "Excited for the upcoming trip!",
    likes: 15,
    comments: ["Have a great time!", "Don't forget to take pictures."],
  },
  {
    id: 5,
    author: "David Wilson",
    content: "Celebrating a milestone today!",
    likes: 22,
    comments: ["Congratulations!", "Well done!"],
  },
  {
    id: 6,
    author: "Sophia Garcia",
    content: "Exploring new hiking trails.",
    likes: 9,
    comments: ["Which trail is it?", "Is it difficult?"],
  },
  {
    id: 7,
    author: "Liam Martinez",
    content: "Attended an amazing concert last night!",
    likes: 18,
    comments: ["Who was performing?", "Must have been a great show!"],
  },
  {
    id: 8,
    author: "Olivia Lopez",
    content: "Trying out a new recipe in the kitchen.",
    likes: 6,
    comments: ["Share the recipe!", "Hope it turns out delicious."],
  },
  {
    id: 9,
    author: "Noah Thompson",
    content: "Enjoying a relaxing weekend getaway.",
    likes: 11,
    comments: ["Where are you staying?", "Looks like a peaceful place."],
  },
  {
    id: 10,
    author: "Ava Rodriguez",
    content: "Working on an exciting new project.",
    likes: 7,
    comments: ["Can't wait to see the results!", "Keep up the good work."],
  },
];

const Feeds: React.FC = () => {
  const [posts, setPosts] = useState(feedsData);

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

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
    <FeedsDiv>
      {posts.map((post) => (
        <PostDiv key={post.id}>
          <PostHeaderDiv>
            <AuthorAvatarDiv
              src={`https://placekitten.com/40/40?random=${post.id}`}
              alt={post.author}
            />
            <h3>{post.author}</h3>
          </PostHeaderDiv>
          <p>{post.content}</p>
          <PostFooterDiv>
            <LikeButton onClick={() => handleLike(post.id)}>
              Like ({post.likes})
            </LikeButton>
            <CommentsDiv>
              {post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </CommentsDiv>
            <CommentsInputDiv>
              <CommentInput type="text" placeholder="Add a comment..." />
              <button onClick={() => handleComment(post.id, "New comment")}>
                Comment
              </button>
            </CommentsInputDiv>
          </PostFooterDiv>
        </PostDiv>
      ))}
    </FeedsDiv>
  );
};

export default Feeds;
