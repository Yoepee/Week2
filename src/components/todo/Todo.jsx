import React from "react";
import "./style.css";
import {useHistory} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {removeTodo, chagneTodo} from "../../redux/modules/Todo";


function Todo({todo}) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="todo-container">
      <p onClick={(()=>{history.push("/"+todo.id)})}>상세보기</p>
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => dispatch(chagneTodo(todo.id))}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
