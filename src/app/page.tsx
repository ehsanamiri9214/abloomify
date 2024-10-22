"use client";

import { useAppStore } from "@/stores";

const Home = () => {
  const { userId } = useAppStore();

  return (
    <section>
      <h1 className="text-center capitalize my-4 text-lg">home</h1>
      {userId && <p>User ID: {userId}</p>}
    </section>
  );
};

export default Home;
