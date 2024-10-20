"use client";

import config from "@/../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { ReactNode } from "react";

Amplify.configure(config, { ssr: true });

const Auth = ({ children }: { children: ReactNode }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

export default Auth;
