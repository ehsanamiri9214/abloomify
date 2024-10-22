import { cookieBasedClient } from "@/utils/amplify-utils";

const Tasks = async () => {
  const { data: tasks } = await cookieBasedClient.models.Task.list({
    selectionSet: ["title", "details", "id"],
  });
  return (
    <section>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li>
              {item.title} - {item.details}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tasks;
