'use client';

import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
// import { Children } from 'react';

const SessionWrapper = ({ children }) => {
    return (
      <SessionProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </SessionProvider>
    );
  };
export default SessionWrapper;