import React from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import GroupList from "./components/GroupList.jsx";
import "./App.css";

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
