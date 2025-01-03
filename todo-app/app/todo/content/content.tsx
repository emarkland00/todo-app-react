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
  const pendingTodoItems = 1;
  const completedTodoItems = 2;
  const todoFilter = "All";

  const setNewTodoItem = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    console.log("New todo item added");
    console.log("Title:", title);
    console.log("Description:", description);
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, title, description, completed: false },
    ]);
  };

  return (
    <>
      <NewTodoItem setNewTodo={setNewTodoItem} />
      <Spacer y={spacerSize} />
      <TodoList todoItems={todoItems} />
      <Spacer y={spacerSize} />
      <TodoFooter
        pending={pendingTodoItems}
        completed={completedTodoItems}
        filter={todoFilter}
      />
    </>
  );
};

export default ContentComponent;
