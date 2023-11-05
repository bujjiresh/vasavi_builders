import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;