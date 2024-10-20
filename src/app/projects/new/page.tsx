import { createProject } from "@/app/_actions/actions";

const NewProject = () => {
  return (
    <div>
      <form action={createProject}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className=""
        />
        <input
          type="text"
          name="about"
          id="about"
          placeholder="About"
          className=""
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewProject;
