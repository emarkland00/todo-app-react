"use client";

import React from "react";
import { Spacer } from "@nextui-org/spacer";

export interface TodoFooterProps {
  pending: number;
  completed: number;
  filter: string;
}

const TodoFooter = ({
  pending,
  completed,
  filter,
}: TodoFooterProps): JSX.Element => {
  const spacerSize = 2;

  return (
    <>
      <div>
        <span>Pending: {pending}</span>
        <Spacer x={spacerSize} />

        <span>Completed: {completed}</span>
      </div>
      <div>
        <span>Filter: {filter}</span>
      </div>
    </>
  );
};

export default TodoFooter;
