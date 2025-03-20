"use client";

import { useState, useEffect } from "react";
import { Spacer } from "@nextui-org/spacer";

import NewTodoItem from "./new-todo/new-todo";
import TodoList from "./todo-list/todo-list";
import TodoFooter from "./todo-footer/todo-footer";
import { TodoItem } from "./lib/todo-item.interface";

import { apiUrl } from "@/config/api";

const todosApiPath: string = `${apiUrl}/api/todo_items`;

function makeApiReq<T>({
  method,
  path,
  body = undefined,
}: {
  method: string;
  path: string;
  body?: T;
}) {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method == "GET") {
    return fetch(path, options);
  }

  return fetch(path, {
    ...options,
    body: JSON.stringify(body),
  });
}

const ContentComponent = (): JSX.Element => {
  const [numCompleted, setNumCompleted] = useState(0);
  const [numPending, setNumPending] = useState(0);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await makeApiReq({
        method: "GET",
        path: todosApiPath,
      });
      const { data: todoItems }: { data: TodoItem[] } = await res.json();

      setTodos(() => todoItems);
    })();
  }, []);

  const spacerSize = 8;
  const todoFilter = "All";

  const setNewTodoItem = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    makeApiReq({
      method: "POST",
      path: todosApiPath,
      body: {
        todo_item: {
          title,
          description,
          status: "pending",
        },
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTodos([
          ...todos,
          {
            ...json,
            key: json.id,
          },
        ]);
        updateFilterValues();
      });
  };

  const onEditTodoItem = (item: TodoItem) => {
    const { id, ...itemBody } = item;

    makeApiReq({
      method: "PATCH",
      path: `${todosApiPath}/${id}`,
      body: {
        todo_item: itemBody,
      },
    }).then(() => {
      setTodos(
        todos.map((todoItem: TodoItem) => {
          if (todoItem.id !== id) {
            todoItem.title = itemBody.title;
            todoItem.description = itemBody.description;
            todoItem.status = itemBody.status;
          }

          return todoItem;
        }),
      );
      updateFilterValues();
    });
  };

  const onDeleteTodoItem = (item: TodoItem) => {
    makeApiReq({
      method: "DELETE",
      path: `${todosApiPath}/${item.id}`,
      body: {},
    }).then(() => {
      setTodos(todos.filter((i) => item.id !== i.id));
      updateFilterValues();
    });
  };

  const getNumItemsWithStatus = (status: string) =>
    todos.filter((i) => i.status === status).length;

  const updateFilterValues = () => {
    setNumCompleted(getNumItemsWithStatus("completed"));
    setNumPending(getNumItemsWithStatus("pending"));
  };

  if (!todos.length) return <p>Loading data</p>;

  return (
    <>
      <NewTodoItem setNewTodo={setNewTodoItem} />
      <Spacer y={spacerSize} />
      <TodoList
        todoItems={todos}
        onDeleteItem={onDeleteTodoItem}
        onEditItem={onEditTodoItem}
      />
      <Spacer y={spacerSize} />
      <TodoFooter
        completed={numCompleted}
        filter={todoFilter}
        pending={numPending}
      />
    </>
  );
};

export default ContentComponent;
