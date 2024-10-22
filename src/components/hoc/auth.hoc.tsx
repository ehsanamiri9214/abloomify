import { ReactNode } from "react";

const AuthHoc = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default AuthHoc;
