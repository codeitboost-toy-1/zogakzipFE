import React, { useState } from "react";
import Header from "../components/Header"; // Header 추가
import SearchBar from "../components/SearchBar"; // SearchBar 추가
import GroupCard from "./GroupCard.jsx";
import "../styles/components/GroupList.css";

const groupData = [
  {
    id: 1,
    groupImage: "/img/img1.png",
    groupName: "에델바이스",
    groupDescription: "서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.",
    likes: 8,
    comments: 2,
    badges: 2,
    memories: 8,
    empathy: "1.5K",
  },
  {
    id: 2,
    groupImage: "/img/img2.png",
    groupName: "에델바이스",
    groupDescription:
      "서로 한 마음으로 응원하고 이끄는 발걸음에 기적이 가득합니다.",
    likes: 8,
    comments: 2,
    badges: 2,
    memories: 8,
    empathy: "1.5K",
    dDay: 265,
    isPrivate: false,
  },
];

const initialCardsToRender = Array.from(
  { length: 12 },
  (_, i) => groupData[i % 2]
);

const additionalCards = [
  {
    id: 3,
    groupImage: "/img/img3.png",
    groupName: "새로운 그룹 1",
    groupDescription: "추가된 그룹 1 설명입니다.",
    likes: 5,
    comments: 1,
    badges: 1,
    memories: 5,
    empathy: "500",
  },
  {
    id: 4,
    groupImage: "/img/img4.png",
    groupName: "새로운 그룹 2",
    groupDescription: "추가된 그룹 2 설명입니다.",
    likes: 10,
    comments: 4,
    badges: 3,
    memories: 7,
    empathy: "1K",
  },
];

const GroupList = () => {
  const [visibleCards, setVisibleCards] = useState(initialCardsToRender);

  const loadMoreCards = () => {
    setVisibleCards([...visibleCards, ...additionalCards]);
  };

  return (
    <div>
      <Header /> {/* Header 추가 */}
      <SearchBar /> {/* SearchBar 추가 */}
      <div className="group-list">
        {visibleCards.map((group, index) => (
          <GroupCard
            key={index}
            groupImage={group.groupImage}
            groupName={group.groupName}
            groupDescription={group.groupDescription}
            likes={group.likes}
            comments={group.comments}
            badges={group.badges}
            memories={group.memories}
            empathy={group.empathy}
          />
        ))}
      </div>

      {additionalCards.length > 0 && (
        <div className="load-more">
          <button onClick={loadMoreCards}>더보기</button>
        </div>
      )}
    </div>
  );
};

export default GroupList;
