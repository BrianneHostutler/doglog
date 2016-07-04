import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>Dog Log</h2>

      <nav>
        <a href="/">Home</a>
        <a href="/log">Log</a>
        <a href="/about">About</a>
        <a href="/account">My Account</a>
        <AccountsUI />
      </nav>
    </header>
    {content}
  </div>
)
