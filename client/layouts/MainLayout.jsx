import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <img src="/images/bone.png"/>

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
