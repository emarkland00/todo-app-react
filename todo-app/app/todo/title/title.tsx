import React from "react";

import { title } from "@/components/primitives";

const TitleComponent: React.FC = () => {
  return (
    <>
      <h1 className={title()}>Header Component</h1>
    </>
  );
};

export default TitleComponent;
