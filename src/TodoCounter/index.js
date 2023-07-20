
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';
function TodoCounter() {
const {
completedTodos,
totalTodos,

}=React.useContext(TodoContext);

  return (
    <h1 className={completedTodos === totalTodos ? 'sparkles' : ''}>
      {completedTodos === totalTodos ? (
        <span>Felicidades, has completado todos!</span>
      ) : (
        <>
           <span className="TodoCounter"> Has completado {completedTodos} de {totalTodos} Todos</span>
        </>
      )}
    </h1>
  );
}
  export{TodoCounter};