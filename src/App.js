import React from 'react';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import GroupList from './components/GroupList.js';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <GroupList />
    </div>
  );
}

export default App;
