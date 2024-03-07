import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import config from "@config/config.json";
import { FaTelegram } from 'react-icons/fa';

const ChatInterface = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const { logo } = config.site;

  // Create a ref for the last message element
  const lastMessageRef = useRef(null);

  const sendMessage = async () => {
    try {
      // Create a unique identifier for the user's message
      const userMessageId = Date.now();

      // Show user's message instantly with the unique identifier
      setChatHistory([...chatHistory, { id: userMessageId, user: userMessage }]);
      setUserMessage('');

      // Display typing indicator
      setIsBotTyping(true);

      // Send user message to the Flask backend with the identifier
      const response = await axios.post('http://127.0.0.1:5000/ask', { question: userMessage, id: userMessageId });
      const botReply = response.data.answer;

      // Find the user's message by identifier and update the chat history with bot reply
      setChatHistory((prevChatHistory) => {
        return prevChatHistory.map((message) =>
          message.id === userMessageId ? { ...message, bot: botReply } : message
        );
      });

      setIsBotTyping(false);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyDown = (e) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior of the "Enter" key (form submission)
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Use useEffect to fetch initial bot message when the component mounts
  useEffect(() => {
    const fetchInitialBotMessage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/ask');
        const botReply = response.data.message;

        // Update the chat history with the initial bot message
        setChatHistory([{ bot: botReply }]);
      } catch (error) {
        console.error('Error fetching initial bot message:', error);
      }
    };

    fetchInitialBotMessage();
  }, []);

  // Scroll to the last message when chatHistory changes
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  return (
    <div className={`shadow-xl overflow-hidden rounded-t-xl fixed bottom-0 max-w-[350px] dark:bg-[#0e0c0c] bg-white w-full right-[10%] z-50 ${isChatOpen ? 'open' : 'closed'}`}>
      <div className={`bg-blue-500 dark:bg-[#141111d9] text-white cursor-pointer p-2 ${!isChatOpen && "animate-pulse"} `} onClick={toggleChat}>
        <div className="grp-info">
          <h3 className="grp-name text-white">
            You, B-Circles
          </h3>
          <p className="grp-status">
            {isBotTyping ? 'B-Circles is typing...' : 'We typically reply immediately'}
          </p>
        </div>
      </div>
      {isChatOpen && (
        <>
          <div className="chatbox p-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {chatHistory.map((message, index) => (
              <div key={index} className="flex" ref={index === chatHistory.length - 1 ? lastMessageRef : null}>
                <div className="w-full">
                  {message.user && (
                    <div className="flex justify-center items-start">
                      <img
                        src="/images/user-profile.png"
                        alt="User"
                        className="w-8 h-8 rounded-full mr-2 bg-white"
                      />
                      <p className="msg p-3 mb-3 w-3/4 dark:bg-[#2a2323d9] text-white bg-blue-500 rounded">{message.user}</p>
                    </div>
                  )}
                  {message.bot ? (
                    <div className="flex justify-center items-start">
                      <p className="msg p-3 w-3/4 text-black dark:bg-[#2a2323d9] dark:text-white bg-gray-200 rounded">{message.bot}</p>
                      <img
                        src={logo}
                        alt="Bot"
                        className="w-8 h-8 p-1 rounded-full ml-2"
                      />
                    </div>
                  ) :
                    (
                      <div className="flex justify-center items-start">
                        <p className="animate-pulse msg p-3 w-3/4 text-black dark:bg-[#2a2323d9] dark:text-white bg-gray-200 rounded min-h-full">
                          Typing...
                        </p>
                        <img
                          src={logo}
                          alt="Bot"
                          className="w-8 h-8 p-1 rounded-full ml-2"
                        />
                      </div>
                    )}
                </div>
              </div>
            ))}
            {/* Ref element for scrolling to the last message */}
            <div ref={lastMessageRef}></div>
          </div>
          <div className="message-box p-4 flex items-center bg-gray-200 dark:bg-[#141111d9]">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Add the keydown event listener
              className="border-none text-muted rounded-3xl p-2 px-4 flex-grow mr-2 focus:outline-none dark:bg-[#2a2323d9]"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 focus:outline-none"
            >
              <FaTelegram />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInterface;
