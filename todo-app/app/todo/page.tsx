import { Spacer } from "@nextui-org/spacer";

import { title } from "@/components/primitives";

export default function TodoPage() {
  const spacerSize = 8;

  return (
    <div>
      <div>
        <h1 className={title()}>Header Component</h1>
      </div>
      <Spacer y={spacerSize} />
      <div>
        <div>Content Component</div>
      </div>
    </div>
  );
}
