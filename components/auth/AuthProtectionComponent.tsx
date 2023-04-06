import Link from 'next/link';
import React from 'react';
import { getTokenCookie } from '../../utils/cookies';

const WithAuthProtection = (ProtectedComponent) => {
  const AuthProtection = (props) => {
    const token = getTokenCookie();

    if (!token) {
      
      return (<>
         <Link href="/">Please log in! (click here)</Link>
      </>);
    }

    return <ProtectedComponent {...props} />;
  };

  return AuthProtection;
};

export default WithAuthProtection;