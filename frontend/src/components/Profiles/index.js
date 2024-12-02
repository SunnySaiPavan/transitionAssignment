import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Profiles = () =>  {   
  return (
    <div>
    <div className="search_container d-flex flex-row">
        <input type='search' placeholder='SEARCH Chat / Feed chat.......' className="search" />
        <button><i className="bi bi-house-door"></i></button>
    </div>
      
      
    <div className='top-bar'>
      
      
      <div className='user-cards'>
        <div className='card'>
          <div className='avatar'>CB</div>
          <div className='name'>Jonathan Higgins</div>
        </div>
        <div className='card'>
          <div className='avatar'>CB</div>
          <div className='name'>Capt. Trunk</div>
        </div>
        <div className='card active'>
          <div className='avatar'>CB</div>
          <div className='name'>Abbidi Harsha</div>
          <div className='notification'>2</div>
        </div>
      </div>
      <div className='right-section'>
        <button className='messaging-btn'>
          <i className='icon'></i> Messaging
        </button>
        <div className='left-section'>
        <button className='role-btn yellow'>Process Owner HOD</button>
        <button className='role-btn pink'>Admin</button>
      </div>
        <div className='profile'>
          <img
            src='data:image/jpeg;base64,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' /* Placeholder for user profile image */
            alt='Profile'
            className='profile-pic'
          />
          <span>Moguram Saipavan</span>
        </div>
        <button className='logout'>Logout</button>
        
      </div>
    </div>
    </div>
  );
}

export default Profiles
