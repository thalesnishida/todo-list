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
  
  function handleSave(todo: Todo){
    console.log('handleSave', todo);

    const newtodos = [...todos, todo];

    setTodo(newtodos);
  }

  function handleDelete(todoId: number){
    console.log('handleDelete');

    const newTodo = todos.filter((todo)=> todo.id !== todoId);

    setTodo(newTodo);
  };

  function handleComplete(todoId: number){
    console.log('handleComplete');
    const selecTodo = todos.find((todo) => todo.id === todoId);

    const newTodo: Todo = { ...selecTodo, status: 'done'};

    const newTodos = todos.filter((todo) => todo.id !== todoId);

    const newTodos2 = [
      ...newTodos, newTodo
    ];

    setTodo(newTodos2);

  }

  return (

    <div className="container">
    {/* <!-- TODO SECTION --> */}
    <div className="todo-section">
      <h2>TODO</h2>
      <Card onSave={handleSave}/>
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
          status={todoDoing.status}
          onDelete={handleDelete}
          onComplete={handleComplete}/>
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