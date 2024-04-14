import React from 'react';
import Header from './components/Header';
import './App.css'
import HelpSection from './components/HelpSection';
import Main from './components/Main';
import Footer from './components/Footer';
import HelpBot from './components/HelpBot';

const App = () => {

  return (
    <>
      <Header />
      <HelpSection />
      <Main />
      <Footer />
      <HelpBot />
    </>
  )
}

export default App
