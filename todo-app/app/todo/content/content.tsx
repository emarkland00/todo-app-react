"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Spacer } from "@nextui-org/spacer";

import NewTodoItem from "./new-todo/new-todo";
import TodoList from "./todo-list/todo-list";
import TodoFooter from "./todo-footer/todo-footer";
import { TodoItem } from "./lib/todo-item.interface";

import { apiUrl } from "@/config/api";

const makeApiReq = ({
  method,
  path = `${apiUrl}/api/todo_items`,
  body,
}: {
  method: string;
  path?: string;
  body: any;
}) => {
  return fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const ContentComponent = ({
  inputTodoItems,
  setInputTodoItems,
}: {
  inputTodoItems: TodoItem[];
  setInputTodoItems: Dispatch<SetStateAction<TodoItem[]>>;
}): JSX.Element => {
  const [numCompleted, setNumCompleted] = useState(0);
  const [numPending, setNumPending] = useState(0);

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
        setInputTodoItems([
          ...inputTodoItems,
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
      path: `${apiUrl}/api/todo_items/${id}`,
      body: {
        todo_item: itemBody,
      },
    }).then((response) => {
      setInputTodoItems(
        inputTodoItems.map((todoItem: TodoItem) => {
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
      path: `${apiUrl}/api/todo_items/${item.id}`,
      body: {},
    }).then((response) => {
      setInputTodoItems(inputTodoItems.filter((i) => item.id !== i.id));
      updateFilterValues();
    });
  };

  const getNumItemsWithStatus = (status: string) =>
    inputTodoItems.filter((i) => i.status === status).length;

  const updateFilterValues = () => {
    setNumCompleted(getNumItemsWithStatus("completed"));
    setNumPending(getNumItemsWithStatus("pending"));
  };

  return (
    <>
      <NewTodoItem setNewTodo={setNewTodoItem} />
      <Spacer y={spacerSize} />
      <TodoList
        todoItems={inputTodoItems}
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
