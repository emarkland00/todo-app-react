import { Spacer } from "@nextui-org/spacer";

import ContentComponent from "./content/content";
import TitleComponent from "./title/title";

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
