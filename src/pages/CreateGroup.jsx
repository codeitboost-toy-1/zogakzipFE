import React from "react";
import Header2 from "../components/Header2.jsx";
import SizeLBtn from "../components/ButtonL.jsx"; 
import "../styles/makeGroupStyle.css"; 

function CreateGroup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const groupName = formData.get("groupName");
    const groupDescription = formData.get("groupDescription");
    const isPublic = formData.get("isPublic") === "on" ? true : false;
    const password = formData.get("password");

    console.log({
      groupName,
      groupDescription,
      isPublic,
      password,
    });
  };

  return (
    <div className="create-group-page">
      <Header2 />
      <h1 className="create-group-title">그룹 만들기</h1> 
      <form className="group-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>그룹명</label>
          <input type="text" name="groupName" placeholder="그룹명을 입력해 주세요" required />
        </div>

        <div className="form-group">
          <label>대표 이미지</label>
          <input type="file" name="groupImage" />
        </div>

        <div className="form-group">
          <label>그룹 소개</label>
          <textarea name="groupDescription" placeholder="그룹을 소개해 주세요" required></textarea>
        </div>

        <div className="form-group">
          <label>그룹 공개 선택</label>
          <div className="toggle-container">
            <input type="checkbox" name="isPublic" />
            <span>공개</span>
          </div>
        </div>

        <div className="form-group">
          <label>비밀번호 생성</label>
          <input type="password" name="password" placeholder="그룹 비밀번호를 생성해 주세요" />
        </div>

        <div className="size-l-btn">
          <SizeLBtn text="그룹 만들기" onClick={() => console.log("그룹 만들기 버튼 클릭됨")} />
        </div>
      </form>
    </div>
  );
}

export default CreateGroup;
