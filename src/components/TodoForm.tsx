import React, { type Dispatch, type SetStateAction, useState } from 'react';
import type { TodoTypes } from '../todo';
import TodoServices from '../TodoService';

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: TodoTypes = TodoServices.addTodos(newTodoText);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText('');
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a new task..."
        aria-label="New todo"
        className="flex-1 rounded-full bg-slate-50 border border-slate-200 px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <button
        type="submit"
        className="rounded-full bg-emerald-500 text-white px-5 py-3 font-medium hover:bg-emerald-600 active:bg-emerald-700 transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
