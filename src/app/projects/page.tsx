import { cookieBasedClient } from "@/utils/amplify-utils";

const Projects = async () => {
  const { data: projects } = await cookieBasedClient.models.Project.list();

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((item, index) => {
          return (
            <li>
              {item.title} - {item.about}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
