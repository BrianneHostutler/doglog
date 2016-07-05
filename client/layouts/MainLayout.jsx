import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <img src="https://bytebucket.org/briannehostutler/final-project/raw/11d918bb21054707ff516e2a721ad326cf318264/public/bone.png?token=e614c69798372d09fb02c69871b044c97451ee4c" width="150" height="100"/>

      <nav>
        <a href="/">Home</a>
        <a href="/log">Log</a>
        <a href="/account">My Account</a>
        <AccountsUI />
      </nav>
    </header>
    {content}
  </div>
)
