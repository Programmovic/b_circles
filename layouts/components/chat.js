import React, { useState } from 'react';
import axios from 'axios';

const ChatInterface = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    // Send user message to the Flask backend
    try {
      const response = await axios.post('/api/chat', { message: userMessage });
      const botReply = response.data.message;

      // Update the chat history with user message and bot reply
      setChatHistory([...chatHistory, { user: userMessage, bot: botReply }]);
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='w-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 rounded-10 z-50 shadow-lg'>
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index}>
            <div>User: {message.user}</div>
            <div>Bot: {message.bot}</div>
          </div>
        ))}
      </div>

      <div className="user-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
