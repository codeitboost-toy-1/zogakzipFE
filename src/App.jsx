import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import GroupList from "./components/GroupList.jsx";
import CreateGroup from "./pages/CreateGroup.jsx"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <GroupList />
            </>
          } />
          <Route path="/createGroup" element={<CreateGroup />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
