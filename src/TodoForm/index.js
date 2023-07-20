import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";
function TodoForm() {
    const{
       addTodo,
        setOpenModal,

    }=React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const onSubmit = (event)=>{
           event.preventDefault();
        addTodo(newTodoValue)
           setOpenModal(false);

    };
    const onCancel = (event)=>{
        setOpenModal(false);

 };
 const onChange= (event)=>{
setNewTodoValue(event.target.value)
};

  return (
    <form 
     onSubmit={(onSubmit)=>{
       

    }}
    className="TodoForm">
      <label>Escribe tu nuevo TODO</label>
      <textarea 
      placeholder="Escribe tu nueva tarea" 
      value={newTodoValue}
      onChange={onChange}
      
      />
      <div className="
      
      TodoForm-buttons">
        <button 
        className="TodoForm-button 
        TodoForm-button--cancel"
        type="button"
        onClick={onCancel}
        >Cancelar</button>
        <button 
        type= "submit" 
        className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };