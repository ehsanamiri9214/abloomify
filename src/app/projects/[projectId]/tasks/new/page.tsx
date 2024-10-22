import { createTask } from "@/app/_actions/actions";

const NewProjectPage = () => {
  return (
    <>w
      <h1 className="text-center capitalize my-4 text-lg">
        create new task
      </h1>
      <form
        action={createTask}
        className="flex flex-col max-w-lg m-auto p-2"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="p-4 border-b mb-1 rounded-lg"
          required
        />
        <textarea
          name="details"
          id="details"
          placeholder="Details ..."
          className="p-4 border-b mb-1 rounded-lg"
          required
          rows={5}
          maxLength={280}
          autoComplete="on"
        />
        <button
          type="submit"
          className="p-4 bg-sky-500 text-white capitalize rounded-lg"
        >
          submit
        </button>
      </form>
    </>
  );
};

export default NewProjectPage;
