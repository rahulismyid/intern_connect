import React from "react";
import { NewsArticleDiv, NewsFeedsDiv } from "./news-feeds.styles.";

interface NewsArticle {
  id: number;
  title: string;
  description: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Breaking News",
    description: "This is the description of Breaking News article.",
  },
  {
    id: 2,
    title: "Latest Updates",
    description: "This is the description of Latest Updates article.",
  },
  {
    id: 3,
    title: "Tech News",
    description: "This is the description of Tech News article.",
  },
  // Add more news articles here...
];

const NewsFeeds: React.FC = () => {
  return (
    <NewsFeedsDiv>
      <h2>News Feeds</h2>
      {newsArticles.map((article) => (
        <NewsArticleDiv key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </NewsArticleDiv>
      ))}
    </NewsFeedsDiv>
  );
};

export default NewsFeeds;
