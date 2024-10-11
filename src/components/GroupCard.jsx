import React from 'react';
import '../styles/components/GroupCard.css';
import flowerIcon from '../img/image.png'; 

const GroupCard = ({ groupImage, groupName, groupDescription, likes, comments, badges, memories, empathy }) => {
    return (
      <div className="group-card">
        <img src={groupImage} alt={groupName} className="group-card-image" />
        <div className="group-card-content">
          <div className="group-card-top">
            <span className="group-d-day">D-265</span>
            <span className="group-private">공개</span>
          </div>
          <h3 className="group-card-title">{groupName}</h3>
          <p className="group-card-description">{groupDescription}</p>
          <div className="group-card-stats">
            <div className="group-card-stat">
              <span>획득 배지 {badges}</span>
              <span>추억 {memories}</span>
            </div>
            <div className="group-card-empathy">
              <span>그룹 공감</span>
              <div className="group-empathy">
                <img src={flowerIcon} alt="꽃 아이콘" className="group-card-icon" /> {/* 숫자 앞에 아이콘 추가 */}
                <span>{empathy}</span> {/* 그룹 공감 숫자 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GroupCard;