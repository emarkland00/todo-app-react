"use client";

import TodoItemElem from "./todo-item/todo-item";

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

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
    todoItems.map((item) => {
      if (item.id === todoItem.id) {
        item.title = todoItem.title;
        item.description = todoItem.description;
      }
    });
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
          handleDelete={() => handleDelete(item)}
          handleEdit={() => handleEdit(item)}
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoList;
