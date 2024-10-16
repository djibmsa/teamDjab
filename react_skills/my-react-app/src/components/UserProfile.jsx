import React from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = React.useContext(UserContext);
  return (
    <>
      <div>User is {isOnline ? 'online' : 'offline'}</div>

      <button onClick={() => setIsOnline(!isOnline)}>
        click to change user status{' '}
      </button>
    </>
  );
}

export default UserProfile;
