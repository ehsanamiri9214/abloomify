"use server";

import { cookieBasedClient } from "@/utils/amplify-utils";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  const { data } = await cookieBasedClient.models.Project.create({
    title: formData.get("title")?.toString() || "",
    about: formData.get("about")?.toString() || "",
  });
  redirect("/");
};

const createTask = async (formData: FormData) => {
  const { data } = await cookieBasedClient.models.Task.create({
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
  });
  redirect("/");
};

export { createProject, createTask };
