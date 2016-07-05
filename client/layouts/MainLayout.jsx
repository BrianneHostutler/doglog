import React from 'react';
import AccountsUI from '../accounts/AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <img src="https://bytebucket.org/briannehostutler/final-project/raw/ea902539ac9bccd941e001ef9885f01afa6167d5/public/images/bone.png?token=725b526e2d6925964ad4a773e611e81d44cb230b" width="250" height="100"/>

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
