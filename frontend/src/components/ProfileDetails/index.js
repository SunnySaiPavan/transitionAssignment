import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ProfileDetails = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar">CB</div>
        <div>
          <h2 className="name">Hannibal Smith</h2>
          <p className="address">1 Market Street, San Francisco, CA 94105</p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-card">
          <div className="info-row">
            <span>Customer ID</span>
            <span>12345</span>
          </div>
          <div className="info-row">
            <span>Email Address</span>
            <span>rachel@sample.com</span>
          </div>
          <div className="info-row">
            <span>Phone Number</span>
            <span>8051298905</span>
          </div>
          <div className="add-row">+ Add</div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <span>Loyalty Tier</span>
            <span>Silver</span>
          </div>
          <div className="info-row">
            <span>Segment</span>
            <span>Sleepy Customer</span>
          </div>
          <div className="add-row">+ Add</div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <span>Lifetime Value</span>
            <span>$1M</span>
          </div>
          <div className="info-row">
            <span>Propensity to Purchase</span>
            <span className="progress yellow">75%</span>
          </div>
          <div className="add-row">+ Add</div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <span>Engagement Score</span>
            <span className="progress green">80%</span>
          </div>
          <div className="add-row">+ Add</div>
        </div>
      </div>
      <div className="assign-agent">
        <button className="assign-btn">+ Assign other Agent</button>
        <button className="assign-btn-2">Add New Widget</button>
      </div>
    </div>
  );
}

export default ProfileDetails
