import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Actions = () => {
   return (
    <div className="helpdesk-container">
      {/* Header Section */}
      <div className="header">
        <h1>Ask Catura</h1>
        <div className="communication-options">
          <span><i className="bi bi-whatsapp"></i> WhatsApp</span>
          <span><i className="bi bi-envelope"></i> Greetings</span>
        </div>
      </div>

      {/* Greeting Template Section */}
      <div className="greeting-template-section">
        <div className="greeting-template">
          <p className="template-text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
            ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
          </p>
          <div className="template-actions">
            <button className="copy-button">Copy to Send</button>
            <button className="preview-button">Preview</button>
          </div>
        </div>
      </div>

      {/* Message Input Section */}
      <div className="message-input-section">
        <input
          type="text"
          placeholder="Type a message..."
          className="message-input"
        />
        <button className="send-button">➤</button>
      </div>

      {/* Action Launcher Section */}
      <div className="action-launcher">
        <h2>Action Launcher</h2>
        <div className="action-search">
          <input type="text" placeholder="Search actions..." />
        </div>
        <div className="action-buttons">
          <button className="action-button">+ Add Action</button>
          <button className="action-button">Fee Reversal</button>
          <button className="action-button">Retail Onboarding</button>
          <button className="action-button">Address Update</button>
        </div>
      </div>

      {/* Case Favorite Section */}
      <div className="case-favorite">
        <h2>Case Favorite</h2>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
        </div>
        <div className="case-item photo">
          <span><i class="bi bi-camera"></i></span> Photo
        </div>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
        </div>
      </div>
    </div>
  );
}

export default Actions
