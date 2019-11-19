import React from 'react';
import '../style/App.css';
import Header from './main/Header';
import MainLogo from './components/MainLogo';
import MainContent from './components/MainContent';

function App() {

  return (
    <div className="App">
      <Header/>
      <MainLogo/>
      <MainContent/>
    </div>
  );
}

export default App;
