import { createTask } from "@/app/_actions/actions";

const NewTask = () => {
  return (
    <div>
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
          name="description"
          id="description"
          placeholder="Description"
          className=""
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewTask;
