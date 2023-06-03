import React from "react";
import "./knowledge-sharing.styles.css";

interface KnowledgeSharingProps {
  username: string;
}

const KnowledgeSharing: React.FC<KnowledgeSharingProps> = ({ username }) => {
  const [questions, setQuestions] = React.useState<string[]>([]);
  const [articles, setArticles] = React.useState<string[]>([]);

  const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const questionInput = e.currentTarget.elements[
    //   "question"
    // ] as HTMLInputElement;
    // const question = questionInput.value;
    // if (question) {
    //   setQuestions((prevQuestions) => [...prevQuestions, question]);
    //   questionInput.value = "";
    // }
  };

  const handleArticleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const articleInput = e.currentTarget.elements[
    //   "article"
    // ] as HTMLInputElement;
    // const article = articleInput.value;
    // if (article) {
    //   setArticles((prevArticles) => [...prevArticles, article]);
    //   articleInput.value = "";
    // }
  };

  return (
    <div className="knowledge-sharing-container">
      <h2 className="welcome-message">Welcome, {username}!</h2>
      <div className="section">
        <h3>Ask a Question</h3>
        <form onSubmit={handleQuestionSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter your question"
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {questions.map((question: string, index: number) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Contribute an Article</h3>
        <form onSubmit={handleArticleSubmit}>
          <input type="text" name="article" placeholder="Enter your article" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {articles.map((article: string, index: number) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KnowledgeSharing;
