import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../ui/ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

// FIX: Removed React.FC for better type compatibility.
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 focus:outline-none">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Layout;