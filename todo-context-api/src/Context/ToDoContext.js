import React, { useContext } from "react";
export const ToDoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "ToDO msg",
      completed: false,
    },
  ],
  addTodo : (todo) =>{},
  updateTodo : (id, todo) =>{},
  deleteTodo : (id)=>{},
  toggleComplete :(id)=>{}
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
