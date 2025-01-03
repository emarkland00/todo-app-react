import { title } from "@/components/primitives";

const TitleComponent = (): JSX.Element => {
  return (
    <>
      <h1 className={title()}>To-Do List</h1>
    </>
  );
};

export default TitleComponent;
