import Project from "@/components/project";
import { ROUTES } from "@/constants";
import { cookieBasedClient } from "@/utils/amplify-utils";
import Link from "next/link";

const ProjectsPage = async () => {
  const { data: projects } = await cookieBasedClient.models.Project.list();

  return (
    <section>
      <h1 className="text-center capitalize my-4 text-lg">list all projects</h1>
      <ul className="flex justify-center items-center flex-col flex-wrap gap-2 max-w-lg m-auto my-4">
        {!projects.length && <p>No tasks found!</p>}
        {projects.map((item, index) => {
          return (
            <li key={index + ""} className="flex w-full">
              <Link
                href={ROUTES.PROJECTS + "/" + item.id + ROUTES.TASKS}
                className="w-full"
              >
                <Project item={item} />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={ROUTES.PROJECTS + ROUTES.NEW}
        className="block max-w-lg m-auto p-4 bg-sky-400 capitalize text-white font-bold rounded-lg text-center"
      >
        + new project
      </Link>
    </section>
  );
};

export default ProjectsPage;
