import React, { useState } from 'react';
import type { TodoTypes } from '../todo';
import TodoServices from '../TodoService';
import { FaEdit, FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoServices.getTodos());
  const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>('');

  //function for handling edit
  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText('');
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== '') {
      TodoServices.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodoId ? { ...todo, text: editedTodoText } : todo
        )
      );
      handleEditCancel();
    }
  };

  const handleEditKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === 'Enter') {
      if (editingTodoId !== null) {
        handleEditSave(editingTodoId);
      }
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  //Function to delete todos
  const handleDeleteTodo = (id: number) => {
    TodoServices.deletingTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="space-y-4">
      <TodoForm setTodos={setTodos} />
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {todos.map((todo) => (
          <div
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 p-3 shadow-sm hover:shadow-md transition"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <div className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                  className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onKeyDown={handleEditKeyDown}
                />
                <button
                  onClick={() => handleEditSave(todo.id)}
                  className="p-2 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                  aria-label="Save"
                  title="Save"
                >
                  <FaCheck />
                </button>
                <button
                  className="p-2 rounded-lg text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                  onClick={() => handleEditCancel()}
                  aria-label="Cancel"
                  title="Cancel"
                >
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full gap-3">
                <span className="text-slate-700">{todo.text}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEditStart(todo.id, todo.text)}
                    className="p-2 rounded-lg text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                    aria-label="Edit"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 rounded-lg text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                    aria-label="Delete"
                    title="Delete"
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
