"use client";

import { Spacer } from "@nextui-org/spacer";

import ContentComponent from "./content/content";
import TitleComponent from "./title/title";

export default function TodoPage() {
  const spacerSize = 8;

  return (
    <>
      <TitleComponent />
      <Spacer y={spacerSize} />
      <ContentComponent />
    </>
  );
}
