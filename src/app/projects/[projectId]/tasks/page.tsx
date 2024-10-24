import Task from "@/components/task";
import { ROUTES } from "@/constants";
import { cookieBasedClient } from "@/utils/amplify-utils";
import Link from "next/link";

const Tasks = async () => {
  const { data: tasks } = await cookieBasedClient.models.Task.list({
    selectionSet: ["title", "details", "id"],
  });
  return (
    <section className="p-2">
      <h1 className="text-center capitalize my-4 text-lg">list all tasks</h1>
      <div className="flex p-2 shadow-lg rounded-lg bg-white max-w-xl m-auto">
        <p className="flex-1 capitalize font-bold">title</p>
        <p className="flex-1 capitalize font-bold">details</p>
      </div>
      <ul className="flex justify-center items-center flex-col flex-wrap gap-2 max-w-xl m-auto my-4">
        {!tasks.length && <p>No tasks found!</p>}
        {tasks.map((item, index) => {
          return (
            <li key={index + ""} className="flex w-full">
              <Task item={item} />
            </li>
          );
        })}
      </ul>
      <Link
        href={"." + ROUTES.TASKS + ROUTES.NEW}
        className="block max-w-xl m-auto p-4 bg-sky-400 capitalize text-white font-bold rounded-lg text-center"
      >
        + new task
      </Link>
    </section>
  );
};

export default Tasks;
