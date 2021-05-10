import React from 'react';

function Card(){
  let status = 'doing';
  return (
<div className="card animate blue">
        <input type="text" className="card-title" placeholder="Título" />
        <textarea className="card-description" placeholder="Descrição"></textarea>

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
          <button type="button" className="card-button animate">
            Salvar
          </button>
        </div>
        )}
        {status === 'doing' && (
          <div className="card-buttons-container">
          <button type="button" className="card-button animate">
            ✖
          </button>
          <button type="button" className="card-button animate">
            ✔
          </button>
        </div>
        )}
        
      </div>
  )
}

export default Card;