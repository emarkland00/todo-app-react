"use client";

import { useState } from "react";

interface NewTodoProps {
  setNewTodo: (todo: { title: string; description: string }) => void;
}

const NewTodo = ({ setNewTodo }: NewTodoProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNewTodoItem = () => {
    setNewTodo({
      title,
      description,
    });
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter new todo item"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddNewTodoItem}>Add</button>
      </div>
    </>
  );
};

export default NewTodo;
