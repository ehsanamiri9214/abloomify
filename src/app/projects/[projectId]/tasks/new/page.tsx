import { createTask } from "@/app/_actions/actions";

const NewTask = () => {
  return (
    <form action={createTask}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        className=""
      />
      <input
        type="text"
        name="details"
        id="details"
        placeholder="Details"
        className=""
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default NewTask;
