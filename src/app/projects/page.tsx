import Project from "@/components/project";
import { cookieBasedClient } from "@/utils/amplify-utils";

const Projects = async () => {
  const { data: projects } = await cookieBasedClient.models.Project.list();

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((item, index) => {
          return (
            <li key={index}>
              <Project item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
