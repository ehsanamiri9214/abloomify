"use client";

import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

const Home = () => {
  const getUser = async () => {
    const authSession = await fetchAuthSession();
    const credentials = authSession.credentials;
    console.log({ credentials });

    const { username, userId, signInDetails } = await getCurrentUser();
    console.log({ username, userId, signInDetails });
  };

  return (
    <section>
      <h1 className="text-center capitalize my-4 text-lg">home</h1>
      <button onClick={getUser}>test</button>
    </section>
  );
};

export default Home;
