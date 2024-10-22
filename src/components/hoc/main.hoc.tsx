"use client";

import { useAppStore } from "@/stores";
import { getCurrentUser } from "aws-amplify/auth";
import { ReactNode, useEffect } from "react";

const MainHoc = ({ children }: { children: ReactNode }) => {
  const { setUserId } = useAppStore();

  const getUserId = async (): Promise<void> => {
    const { userId } = await getCurrentUser();
    if (userId) setUserId(userId);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return <main>{children}</main>;
};

export default MainHoc;
