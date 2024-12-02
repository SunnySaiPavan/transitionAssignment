import React from 'react';

import Sidebar from './components/Sidebar'
import Profiles from './components/Profiles'
import ProfileDetails from './components/ProfileDetails'
import Conversation from './components/Conversation'
import Actions from './components/Actions'




const App =() => {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div>
        <Profiles />
        <div className='d-flex flex-row'>
          <ProfileDetails />
          <Conversation />
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default App;
