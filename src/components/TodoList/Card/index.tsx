import React from 'react';
import { CardProps, Todo } from './interface';

function Card(props: CardProps){
  
  const { status = 'todo', color = 'blue', onSave, onDelete, onComplete} = props;

  const isReadOnly = status === "doing" || status === "done";

  const [title, setTitle] = React.useState(props.title);
  const [description, setDescription] = React.useState(props.description);

  function handleTitle(event: React.ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value);

  }

  function handleDescription(event: React.ChangeEvent<HTMLTextAreaElement>){
    
    setDescription(event.target.value);
  }

  function handleSave(){
    const todo: Todo = {
      id: Math.floor(Math.random() * 999),
      title: 'Hello',
      description: 'description',
      status: 'doing',
      color:"blue"
    }
    onSave(todo);
  }

 
  
  return (
<div className={`card animate ${color}`}>
        <input 
        type="text" 
        className="card-title" 
        placeholder="Título" 
        value={title} 
        onChange={handleTitle} 
        readOnly={isReadOnly} />
        
        <textarea 
        className="card-description" 
        placeholder="Descrição" 
        value={description}
        onChange={handleDescription} 
        readOnly={isReadOnly}>

        </textarea>

        {status === 'todo' && (
          <div className="color-options-container">
          <button type="button" className="color-option animate red"></button>
          <button type="button" className="color-option animate pink"></button>
          <button type="button" className="color-option animate purple"></button>
          <button type="button" className="color-option animate deep-purple"></button>
          <button type="button" className="color-option animate indigo"></button>
          <button type="button" className="color-option animate blue active-color"></button>
          <button type="button" className="color-option animate cyan"></button>
          <button type="button" className="color-option animate teal"></button>
          <button type="button" className="color-option animate green"></button>
          <button type="button" className="color-option animate light-green"></button>
          <button type="button" className="color-option animate lime"></button>
          <button type="button" className="color-option animate yellow"></button>
          <button type="button" className="color-option animate amber"></button>
          <button type="button" className="color-option animate orange"></button>
          <button type="button" className="color-option animate deep-orange"></button>
          <button type="button" className="color-option animate brown"></button>
          <button type="button" className="card-button animate" onClick={handleSave}>
            Salvar
          </button>
        </div>
        )}
        {status === 'doing' && (
          <div className="card-buttons-container">
          <button type="button" className="card-button animate" onClick={onDelete}>
            ✖
          </button>
          <button type="button" className="card-button animate" onClick={onComplete}>
            ✔
          </button>
        </div>
        )}
        
      </div>
  )
}

export default Card;