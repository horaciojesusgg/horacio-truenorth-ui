import React from 'react';
import { deleteTokenCookie } from '../../utils/cookies';

const SignOutButton = () => {
  const handleSignOut = () => {
    deleteTokenCookie();
    window.location.reload();
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;