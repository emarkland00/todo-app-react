"use client";

import TodoItem from "./todo-item/todo-item";

interface TodoItem {
  id: number;
  title: string;
  description: string;
}

interface TodoListProps {
  todoItems: TodoItem[];
}

const TodoList = ({ todoItems }: TodoListProps): JSX.Element => {
  const handleEdit = (todoItem: TodoItem) => {
    console.log("Edit todo item");
    console.log("ID:", todoItem.id);
    console.log("Title:", todoItem.title);
    console.log("Description:", todoItem.description);
    todoItems.map((item) => {
      if (item.id === todoItem.id) {
        item.title = todoItem.title;
        item.description = todoItem.description;
      }
    });
  };

  const handleDelete = (item: TodoItem) => {
    console.log("Delete todo item");
    console.log("ID:", item.id);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          description={item.description}
          handleDelete={() => handleDelete(item)}
          handleEdit={() => handleEdit(item)}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default TodoList;
