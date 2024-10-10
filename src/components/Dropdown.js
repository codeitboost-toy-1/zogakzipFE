import React, { useState } from 'react';
import '../styles/components/Dropdown.css';

const Dropdown = () => {
  const [firstOption, setFirstOption] = useState('공감순');
  const [secondOption, setSecondOption] = useState('공감순');

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <select 
          value={firstOption} 
          onChange={(e) => setFirstOption(e.target.value)}
          className="dropdown-select"
        >
          <option value="공감순">공감순</option>
          <option value="최신순">최신순</option>
          <option value="댓글순">댓글순</option>
        </select>
      </div>
      <div className="dropdown">
        <select 
          value={secondOption} 
          onChange={(e) => setSecondOption(e.target.value)}
          className="dropdown-select"
        >
          <option value="공감순">공감순</option>
          <option value="최신순">최신순</option>
          <option value="댓글순">댓글순</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
