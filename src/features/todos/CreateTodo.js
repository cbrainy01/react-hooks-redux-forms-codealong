import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {todoAdded} from "./todosSlice"
import { useSelector } from "react-redux";

function CreateTodo() {
  
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector( (state) => state.todos.entities )

  function handleSubmit(e) {
    // dispatch action which takes in input value as its payload
    e.preventDefault()
    dispatch( todoAdded(text) )
    setText("")
  }
  
  return <div>
    <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input onChange={(e) => setText(e.target.value) }  value={text} type="text" />
        </p>
        <input type="submit" />
      </form>
      <p>Form text: {text}</p><br/>
      <h2>TODOS</h2>
      <ol>{todos.map( (todo) => <li>{todo}</li> )}</ol>
  </div>;
}

export default CreateTodo;
