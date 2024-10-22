const Task = ({ item }: { item: any }) => {
  return (
    <div>
      {item.name}-{item.details}-{item.id}
    </div>
  );
};

export default Task;
