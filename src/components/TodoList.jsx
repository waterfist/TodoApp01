import React from "react";

// Props로 todos와 isActive를 가져옴.
const TodoList = ({ todos, isActive }) => {
  return (
    <>
      {/* 해석: isActive라면 "할 일"이다. 그게 아니라면 "완료"이다. */}
      <h4>{isActive ? "할 일" : "완료"}</h4>
      {/* filter를 통해 isDone을 골라서 보여줌. 
        해석: item중에 isDone이 isActive가 아닌 것만 나와주세요.
        isDone = !isActive 
        map 함수를 통해서 전체를 출력함. 19분08초 */}
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
              }}
              key={item.id}
            >
              <h5>{item.title}</h5>
              <p>{item.contents}</p>
              {/* 해석: isActive라면 완료이다. 그게 아니라면 취소이다. */}
              <button>{isActive ? "완료" : "취소"}</button>
              <button>삭제</button>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
