const Project = ({ item }: { item: any }) => {
  return (
    <div className="flex w-full p-2 shadow-lg bg-white rounded-lg">
      <p className="flex-1 capitalize">{item.title}</p>
      <p className="flex-1 capitalize">{item.about}</p>
    </div>
  );
};

export default Project;
