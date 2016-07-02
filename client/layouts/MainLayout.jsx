import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>Dog Log</h2>

      <nav>
        <a href="/">Home</a>
        <a href="/about">Log</a>
        <AccountsUI />
      </nav>
    </header>
    {content}
  </div>
)
