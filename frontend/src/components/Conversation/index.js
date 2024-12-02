import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Conversation = () => {
   return (
    <div className="chat-interface">
      <div className="tab-bar">
        <div className="tab active">Conversation <i className="bi bi-trash3"></i></div>
        <div className="tab">Address Update <i className="bi bi-trash3"></i></div>
        <div className="tab">Fee Reversal <i className="bi bi-trash3"></i></div>
        
        <button className="escalate-button">Escalate</button>
      </div>
      <div className="conversation-section">
        <div className="message received">
          <div className="sender-info">
            <span className="sender-name">Abbidi harsha</span>
            <span className="timestamp">10:30 PM • Received By WhatsApp</span>
          </div>
          <div className="message-content">
            Hey Saipavan! I just came across a Frontend Developer role at this transition company, and I immediately thought of you. They’re looking for someone experienced in React, CSS, and responsive design.

They also mentioned tools like TypeScript, and a bit of backend knowledge with Node.js. Sounds like a great fit for your skill set!

Want me to send you the job posting?


          </div>
        </div>
        <div className="message sent">
          <div className="sender-info">
            <span className="sender-name">You</span>
            <span className="timestamp">01DEC, 2024 • 10:32 PM • Sent By WhatsApp</span>
          </div>
          <div className="message-content">
            Hey Harsha, thanks for thinking of me! That does sound like a perfect fit. I’ve worked a lot with React, and I’m comfortable with responsive design too.

Yeah, please share the job posting. I’ll start working on my application tonight. Let me know if you have any tips for standing out during the process.
          </div>
        </div>
      </div>
      <div className="message-input-section">
        <input type="text" placeholder="Type a message..." />
        <div className="send-options">
          <label>
            <input type="checkbox" checked /> SMS
          </label>
          <label>
            <input type="checkbox" checked /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default Conversation
