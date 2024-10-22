import AuthHoc from "@/components/hoc/auth.hoc";
import Project from "@/components/project";
import { ROUTES } from "@/constants";
import { cookieBasedClient } from "@/utils/amplify-utils";
import Link from "next/link";

const ProjectsPage = async () => {
  const { data: projects } = await cookieBasedClient.models.Project.list();

  return (
    <AuthHoc>
      <section className="p-2">
        <h1 className="text-center capitalize my-4 text-lg">
          list all projects
        </h1>
        <div className="flex p-2 shadow-lg rounded-lg bg-white max-w-xl m-auto">
          <p className="flex-1 capitalize font-bold">title</p>
          <p className="flex-1 capitalize font-bold">about</p>
        </div>
        <ul className="flex justify-center items-center flex-col flex-wrap gap-2 max-w-xl m-auto my-4">
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
          className="block max-w-xl m-auto p-4 bg-sky-400 capitalize text-white font-bold rounded-lg text-center"
        >
          + new project
        </Link>
      </section>
    </AuthHoc>
  );
};

export default ProjectsPage;
