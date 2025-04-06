import React, { useState } from 'react';
import { assistantTopics } from "../../lib/assistantData";
interface Recommendation {
  text: string;
  actionType: 'route' | 'scroll';
  target: string;
}

interface AssistantTopic {
  id: string;
  question: string;
  answer: string;
  recommendation?: Recommendation;
}

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  recommendation?: Recommendation;
}

const AssistantPanel: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  const openPanel = () => {
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const handleQuestionClick = (question: string) => {
    addMessage('user', question);
    const topic = assistantTopics.find((topic) => topic.question === question);
    if (topic && topic.answer) {
      addMessage('assistant', topic.answer);
      if (topic.recommendation) {
        addRecommendation(topic.recommendation);
      }
    } else {
      addMessage('assistant', 'Sorry, I don\'t have a specific answer for that right now.');
    }
  };

  const handleSendMessage = () => {
    if (currentInput.trim()) {
      handleQuestionClick(currentInput.trim()); // Treat typed input as a question
      setCurrentInput('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };

  const addMessage = (sender: 'user' | 'assistant', text: string) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender, text }]);
  };

  const addRecommendation = (recommendation: Recommendation) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender: 'assistant', text: recommendation.text, recommendation }]);
  };

  const handleRecommendationClick = (recommendation: Recommendation) => {
    if (recommendation.actionType === 'route') {
      window.location.href = recommendation.target;
    } else if (recommendation.actionType === 'scroll') {
      const element = document.getElementById(recommendation.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        addMessage('assistant', `Could not find element with ID "${recommendation.target}" to scroll to.`);
      }
    }
  };

  return (
    <>
      <button
        id="open-assistant-panel"
        onClick={openPanel}
        style={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '15px 10px',
          cursor: 'pointer',
          borderRadius: '5px 0 0 5px',
          zIndex: 1001,
        }}
      >
        Need Robbie's Help?
      </button>
      <div
  id="assistant-panel"
  className={isPanelOpen ? 'open' : ''}
  style={{
    position: 'fixed',
    top: 0,
    right: isPanelOpen ? 0 : -350, // Conditionally set 'right' based on isPanelOpen
    width: 350,
    height: '100%',
    backgroundColor: '#f9f9f9',
    borderLeft: '1px solid #ccc',
    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1000,
  }}
>
        <div
          style={{
            backgroundColor: '#eee',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3>Robbie</h3>
          <button
            id="close-assistant-panel"
            onClick={closePanel}
            style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2em' }}
          >
            ×
          </button>
        </div>
        <div
          id="assistant-content"
          style={{ padding: '15px', overflowY: 'auto', height: 'calc(100% - 100px)' }}
        >
          <p>Ask me a question:</p>
          <div id="question-list">
            {assistantTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleQuestionClick(topic.question)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginBottom: '5px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}
              >
                {topic.question}
              </button>
            ))}
          </div>
          <div id="chat-area-panel" style={{ padding: '10px', overflowY: 'auto', marginTop: '10px' }}>
            {chatMessages.map((message, index) => (
              <div key={index} className={`${message.sender}-message-panel`} style={{
                  backgroundColor: message.sender === 'assistant' ? '#f0f0f0' : '#e0f7fa',
                  padding: '8px',
                  marginBottom: '8px',
                  borderRadius: '5px',
                  maxWidth: '80%',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                }}>
                {message.text}
                {message.recommendation && (
                  <button onClick={() => handleRecommendationClick(message.recommendation)} style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', border: '1px solid #ccc', backgroundColor: '#fff' }}>Yes</button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '15px', borderTop: '1px solid #ccc' }}>
          <p>Type your question or choose from the list above.</p>
          <input
            type="text"
            id="user-input-panel"
            value={currentInput}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
          />
          <button
            id="send-button-panel"
            onClick={handleSendMessage}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default AssistantPanel;