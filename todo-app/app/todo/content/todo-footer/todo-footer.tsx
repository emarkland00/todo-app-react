"use client";

import React from "react";

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
  return (
    <div>
      <div>
        <span>Pending: {pending}</span>
        <span>Completed: {completed}</span>
      </div>
      <div>
        <span>Filter: {filter}</span>
      </div>
    </div>
  );
};

export default TodoFooter;
