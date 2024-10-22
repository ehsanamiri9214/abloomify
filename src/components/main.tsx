"use client";

import { useAppStore } from "@/stores";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { ReactNode, useEffect } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  const { userId, setUserId } = useAppStore();

  const getUserId = async (): Promise<void> => {
    const authSession = await fetchAuthSession();
    const credentials = authSession.credentials;
    const { username, userId, signInDetails } = await getCurrentUser();
    if (userId) setUserId(userId);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return <main>{children}</main>;
};

export default Main;
