"use server";

import { cookieBasedClient } from "@/utils/amplify-utils";
import { getCurrentUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";

const test = async () => {
  const { username, userId, signInDetails } = await getCurrentUser();
  console.log({ username, userId, signInDetails });
};

const createProject = async (formData: FormData) => {
  await cookieBasedClient.models.Project.create({
    title: formData.get("title")?.toString() || "",
    about: formData.get("about")?.toString() || "",
  });
  redirect("/");
};

const createTask = async (formData: FormData) => {
  await cookieBasedClient.models.Task.create({
    title: formData.get("title")?.toString() || "",
    details: formData.get("details")?.toString() || "",
  });
  redirect("/");
};

export { createProject, createTask, test };
