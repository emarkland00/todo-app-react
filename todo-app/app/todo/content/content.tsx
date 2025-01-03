"use client";

import { useState } from "react";
import { Spacer } from "@nextui-org/spacer";

import NewTodoItem from "./new-todo/new-todo";
import TodoList from "./todo-list/todo-list";
import TodoFooter from "./todo-footer/todo-footer";

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const ContentComponent = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const spacerSize = 8;
  const todoFilter = "All";

  const setNewTodoItem = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, title, description, completed: false },
    ]);
  };

  const onEditTodoItem = (item: TodoItem) => {
    setTodoItems(
      todoItems.map((todoItem: TodoItem) =>
        todoItem.id === item.id ? todoItem : item,
      ),
    );
  };

  const onDeleteTodoItem = (item: TodoItem) => {
    setTodoItems(todoItems.filter((i) => item.id !== i.id));
  };

  return (
    <>
      <NewTodoItem setNewTodo={setNewTodoItem} />
      <Spacer y={spacerSize} />
      <TodoList
        todoItems={todoItems}
        onDeleteItem={onDeleteTodoItem}
        onEditItem={onEditTodoItem}
      />
      <Spacer y={spacerSize} />
      <TodoFooter
        completed={todoItems.filter((i) => i.completed).length}
        filter={todoFilter}
        pending={todoItems.filter((i) => !i.completed).length}
      />
    </>
  );
};

export default ContentComponent;
