"use client";

import { TodoItem } from "../lib/todo-item.interface";

import TodoItemElem from "./todo-item/todo-item";

interface TodoListProps {
  todoItems: TodoItem[];
  onEditItem: (item: TodoItem) => void;
  onDeleteItem: (item: TodoItem) => void;
}

const TodoList = ({
  todoItems,
  onEditItem,
  onDeleteItem,
}: TodoListProps): JSX.Element => {
  const handleEdit = (todoItem: TodoItem) => {
    onEditItem(todoItem);
  };

  const handleDelete = (item: TodoItem) => {
    onDeleteItem(item);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todoItems.map((item) => (
        <TodoItemElem
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoList;
