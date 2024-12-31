import React from "react";

import { title } from "@/components/primitives";

const TitleComponent: React.FC = () => {
  return (
    <div>
      <h1 className={title()}>Header Component</h1>
    </div>
  );
};

export default TitleComponent;
