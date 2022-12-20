import React from "react";

// Props로 todos와 isActive를 가져옴.
const TodoList = ({ todos, isActive }) => {
  return (
    <>
      {/* 해석: isActive라면 "할 일"이다. 그게 아니라면 "완료"이다. */}
      <h4>{isActive ? "할 일" : "완료"}</h4>
      {
        // map 함수를 통해서 전체를 출력함.
      }
    </>
  );
};

export default TodoList;
