"use client";

import React from "react";

interface TodoItemProps {
  title: string;
  description: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

const TodoItem = ({
  title,
  description,
  handleEdit,
  handleDelete,
}: TodoItemProps): JSX.Element => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
