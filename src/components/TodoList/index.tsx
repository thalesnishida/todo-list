import React from 'react';

import Card from './Card/index'
import './index.css'
function TodoList(){
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
        <div className="card animate red">
          <input type="text" className="card-title" placeholder="Título" value="Tomar café" />
          <textarea className="card-description" placeholder="Descrição">Tomar café da manhã pra ficar fortinho</textarea>
          <div className="card-buttons-container">
            <button type="button" className="card-button animate">
              ✖
            </button>
            <button type="button" className="card-button animate">
              ✔
            </button>
          </div>
        </div>
        <div className="card animate yellow">
          <input type="text" className="card-title" placeholder="Título" value="Estudar HTML & CSS" />
          <textarea className="card-description" placeholder="Descrição">HTML é de boa mas e CSS... PQP!</textarea>
          <div className="card-buttons-container">
            <button type="button" className="card-button animate">
              ✖
            </button>
            <button type="button" className="card-button animate">
              ✔
            </button>
          </div>
        </div>
      </div>

      {/* <!-- DONE SECTION --> */}
      <div className="done-section">
        <h2>DONE</h2>
        <div className="card animate indigo">
          <input type="text" className="card-title" placeholder="Título" value="Entregar desafio de HTML & CSS" />
          <textarea className="card-description" placeholder="Descrição">Entregar desafio do Star Wars</textarea>
        </div>
        <div className="card animate cyan">
          <input type="text" className="card-title" placeholder="Título" value="Comer coxinha escondido" />
          <textarea className="card-description"
            placeholder="Descrição">Comer coxinha moscando na mesa dos amiguinho</textarea>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TodoList;