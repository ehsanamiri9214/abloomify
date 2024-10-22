const Project = ({ item }: { item: any }) => {
  return (
    <div>
      {item.name}-{item.about}-{item.id}
    </div>
  );
};

export default Project;
