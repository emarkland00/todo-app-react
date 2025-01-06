"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import * as TodoItemInterface from "../../lib/todo-item.interface";

interface TodoItemProps {
  item: TodoItemInterface.TodoItem;
  handleEdit: (item: TodoItemInterface.TodoItem) => void;
  handleDelete: (item: TodoItemInterface.TodoItem) => void;
}

const TodoItem = ({
  item,
  handleEdit,
  handleDelete,
}: TodoItemProps): JSX.Element => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const onModalOk = () => {
    handleEdit({
      ...item,
      title: title,
      description: description,
    });
  };

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <Button color="primary" onPress={onOpen}>
          Edit
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Edit Todo Item
                </ModalHeader>
                <ModalBody>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      label="Title"
                      placeholder="Enter the updated title"
                      value={title}
                      onValueChange={setTitle}
                    />
                    <Input
                      label="Description"
                      placeholder="Enter the updated description"
                      value={description}
                      onValueChange={setDescription}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      onModalOk();
                      onClose();
                    }}
                  >
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Button onPress={() => handleDelete(item)}>Delete</Button>
      </div>
    </div>
  );
};

export default TodoItem;
