"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

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
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          label="Title"
          placeholder="Enter new todo"
          value={title}
          onValueChange={setTitle}
        />
        <Input
          label="Description"
          placeholder="Enter description"
          value={description}
          onValueChange={setDescription}
        />
        <Button color="primary" onPress={handleAddNewTodoItem}>
          Add
        </Button>
      </div>
    </>
  );
};

export default NewTodo;
