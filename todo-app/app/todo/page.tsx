import { Spacer } from "@nextui-org/spacer";

import ContentComponent from "./content/content-component";
import TitleComponent from "./title/title-component";

export default function TodoPage() {
  const spacerSize = 8;

  return (
    <div>
      <TitleComponent />
      <Spacer y={spacerSize} />
      <ContentComponent />
    </div>
  );
}
