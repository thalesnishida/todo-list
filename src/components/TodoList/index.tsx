import React from 'react';
import './index.css';

import { Todo } from './Card/interface';
import todosJSON from './todos.json';
import Card from './Card/index';

const allTodos = todosJSON.todos as Todo[];


function TodoList(){
  const [todos, setTodo] = React.useState<Todo[]>(allTodos)

  const doingTodos =  todos.filter((todo) => todo.status === "doing");
  const doneTodos = todos.filter ((todo) => todo.status === "done");
  
  return (

    <div className="container">
    {/* <!-- TODO SECTION --> */}
    <div className="todo-section">
      <h2>TODO</h2>
      <Card />
    </div>

    <div className="container2">
      {/* <!-- DOING SECTION --> */}
      <div className="doing-section">
        <h2>DOING</h2>
        {doingTodos.map((todoDoing) => {
          return <Card 
          key={todoDoing.id}
          id={todoDoing.id}
          title={todoDoing.title}
          description={todoDoing.description}
          color={todoDoing.color}
          status={todoDoing.status}/>
        })}
      
      </div>

      {/* <!-- DONE SECTION --> */}
      <div className="done-section">
        <h2>DONE</h2>
        {doneTodos.map((doneTodo) => {
          return <Card key={doneTodo.id}
          id={doneTodo.id}
          title={doneTodo.title}
          description={doneTodo.description}
          color={doneTodo.color}
          status={doneTodo.status}/>
        })}
      </div>
    </div>
  </div>
  )
}

export default TodoList;