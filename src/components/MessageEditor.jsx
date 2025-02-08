import React, { useState } from 'react';
import '../styles/components.css'; // Use the correct relative path

const MessageEditor = ({ message, setMessage }) => {
  return (
    <div className="message-editor">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a personalized message..."
        className="message-textarea"
      />
    </div>
  );
};

export default MessageEditor;