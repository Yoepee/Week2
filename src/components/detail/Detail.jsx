import React from "react";
import {useParams, useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
import "./style.css"

function Detail() {
    const history = useHistory();
    const todo_id = useParams();
    const todo_list = useSelector((state)=>(state.todo.todo)); 
    const todo = todo_list.filter((todo)=> {
        return todo.id === Number(todo_id.id);})
  return (
    <div className="lay">
        <div className="cont">
            <div>
            <div className="form">
                    ID : {todo[0].id}
                    <button className="back" onClick={(()=>{history.push("/")})}>이전으로</button>
                </div>
                    <h1 className="h1p">{todo[0].title}</h1>
                    <p className="pp">{todo[0].body}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail;
