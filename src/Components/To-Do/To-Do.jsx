import React, { useState } from 'react'
import './To-Do.css'
import check from '../Assets/check.png'




const ToDo = () => {
    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])
    const [completedTaskCount, setCompletedTaskCount] = useState(0);

    const handleClick = () => {
        const id = todoList.length + 1
        setTodoList((prev) => [
          ...prev,
          {
            id: id,
            task: input,
            complete: false,
          },
        ])
        setInput("")
        document.getElementsByClassName('input-todo').value = ''
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleClick();
        }
      };

    const handleComplete = (id) => {
        let list = todoList.map((task) => {
          let item = {};
          if (task.id == id) {
            if (!task.complete){
                //Task is pending, modifying it to complete and increment the count
                setCompletedTaskCount(completedTaskCount + 1);
            } 
            else {
                //Task is complete, modifying it back to pending, decrement Complete count
                setCompletedTaskCount(completedTaskCount - 1);
            }item = { ...task, complete: !task.complete };
          } else item = { ...task };return item;
        });
        setTodoList(list);
    }

    return (
        <div className='todo'>
            <div className="container-todo">
                <input className='input-todo' value={input} type="text" onKeyDown={handleKeyDown} onInput={(e) => setInput(e.target.value)} placeholder='what do you have to do today?'/>
                <img src={check}  onClick={() => handleClick()} alt="check icon" />
            </div>
            <div className='lista'>
                    <ul>
                        {todoList.map((todo) => {
                            return (
                                <li className='list'
                                    complete={todo.complete}
                                    id={todo.id}
                                    onClick={() => handleComplete(todo.id)}
                                    style={{
                                    textDecoration: todo.complete && "line-through",
                                    }}
                                >
                                    {todo.task}
                                </li>
                            )
                    })}
                    </ul>
            </div>            
        </div>
        
    )
}
export default ToDo