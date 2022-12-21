import React from "react";

const Todo = ({ item, isActive, setTodos }) => {
  const handleDeleteButtonClick = () => {
    // t.id가 item.id 아니면(다르면) filter를 해주세요. 삭제하지 마세요.
    // 다른 말로, 맞으면 삭제버튼을 눌렀으니 삭제해주세요.
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const handleCompleteButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        // t.id와 item.id가 같으면 return해주세요.
        // 지금 누른 isDone이 맞으면 isDone의 반댓값으로 return 해주세요.
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

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
      <button onClick={handleCompleteButtonClick}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={handleDeleteButtonClick}>삭제</button>
    </div>
  );
};

export default Todo;
