import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './components/Card';

function App() {
  return (
    <div id='app'>
      <Header />
      <div id='content'>
        <Card></Card>
      </div>
      <Footer />
    </div>
  );
}

export default App;
