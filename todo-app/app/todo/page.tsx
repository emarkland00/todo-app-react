"use client";

import { useState, useEffect } from "react";
import { Spacer } from "@nextui-org/spacer";

import ContentComponent from "./content/content";
import TitleComponent from "./title/title";
import { TodoItem } from "./content/lib/todo-item.interface";

export default function TodoPage() {
  const spacerSize = 8;

  let [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/todo_items")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.data);
      });
  }, []);

  if (!todos.length) return <p>Loading data</p>;

  return (
    <>
      <TitleComponent />
      <Spacer y={spacerSize} />
      <ContentComponent inputTodoItems={todos} />
    </>
  );
}
