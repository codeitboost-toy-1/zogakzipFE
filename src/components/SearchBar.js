import React from 'react';
import '../styles/components/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="category-select">
        <option value="all">전체</option>
        <option value="category1">카테고리 1</option>
        <option value="category2">카테고리 2</option>
      </select>
      <input type="text" placeholder="그룹명을 입력하세요." className="search-input" />
      <button className="search-button">조회</button>
    </div>
  );
};

export default SearchBar;
