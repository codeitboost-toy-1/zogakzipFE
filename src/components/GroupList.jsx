import React, { useState } from "react";
import GroupCard from "./GroupCard.jsx";
import "../styles/components/GroupList.css";

// 1번, 2번 카드를 포함한 데이터 배열 (1번, 2번 카드가 반복됨)
const groupData = [
  {
    id: 1,
    groupImage: "/img/img1.png",
    groupName: "에델바이스",
    groupDescription: "서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.",
    likes: 8,
    comments: 2,
    badges: 2, // 획득 배지 추가
    memories: 8, // 추억 추가
    empathy: "1.5K", // 그룹 공감 추가
  },
  {
    id: 2,
    groupImage: "/img/img2.png",
    groupName: "에델바이스",
    groupDescription:
      "서로 한 마음으로 응원하고 이끄는 발걸음에 기적이 가득합니다.",
    likes: 8,
    comments: 2,
    badges: 2, // 획득 배지 추가
    memories: 8, // 추억 추가
    empathy: "1.5K", // 그룹 공감 추가
    dDay: 265,
    isPrivate: false,
  },
];

// 1번과 2번 카드를 반복해서 12개 생성
const initialCardsToRender = Array.from(
  { length: 12 },
  (_, i) => groupData[i % 2]
);

const additionalCards = [
  // 추가로 '더보기' 버튼을 통해 보여줄 그룹 데이터
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
  // 필요 시 추가 데이터 작성
];

const GroupList = () => {
  const [visibleCards, setVisibleCards] = useState(initialCardsToRender); // 처음에 12개의 카드를 보여줌

  const loadMoreCards = () => {
    setVisibleCards([...visibleCards, ...additionalCards]); // 더보기 클릭 시 추가 카드를 로드
  };

  return (
    <div>
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
