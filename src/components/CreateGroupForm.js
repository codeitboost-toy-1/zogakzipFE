import React, { useState } from 'react';

const CreateGroupForm = ({ closeModal }) => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 그룹 생성 로직 작성 (API 호출 등)
    console.log('그룹 이름:', groupName);
    console.log('그룹 설명:', groupDescription);

    // 그룹 생성 후 모달 닫기
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>그룹 이름</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>그룹 설명</label>
        <textarea
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">그룹 만들기</button>
    </form>
  );
};

export default CreateGroupForm;
