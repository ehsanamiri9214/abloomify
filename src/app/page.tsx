import { cookieBasedClient } from "@/utils/amplify-utils";

const HomePage = async () => {
  const { data: tasks } = await cookieBasedClient.models.Task.list({
    selectionSet: ["title", "description", "id"],
    // authMode: "apiKey",
  });

  return (
    <section>
      <h1>HomePage</h1>
      {tasks?.map(async (task) => {
        return <div key={task.id}>{task.title}</div>;
      }) ?? <div>No tasks found</div>}
    </section>
  );
};

export default HomePage;
