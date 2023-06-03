import React, { useState } from "react";
import "./chat-page.styles.css";

interface Message {
  id: number;
  message: string;
  sender: string;
}

const MESSAGES = [
  {
    id: 1,
    sender: "John",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    sender: "Jane",
    message: "Hi John! I'm doing well, thanks. How about you?",
  },
  {
    id: 3,
    sender: "John",
    message: "I'm good too. Just working on a project.",
  },
  {
    id: 4,
    sender: "Jane",
    message: "That's great! What kind of project are you working on?",
  },
  {
    id: 5,
    sender: "John",
    message: "It's a React TypeScript project. How about you?",
  },
  {
    id: 6,
    sender: "Jane",
    message: "I'm working on a backend API using Node.js.",
  },
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObj: Message = {
        id: Date.now(),
        message: newMessage,
        sender: "Me",
      };
      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      setNewMessage("");
    }
  };

  return (
    <div className="messaging-container">
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="sender">{message.sender}</span>
            <span className="message">{message.message}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <div>
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
        </div>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
