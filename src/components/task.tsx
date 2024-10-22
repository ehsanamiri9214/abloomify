const Task = ({ item }: { item: any }) => {
  return (
    <div>
      {item.title}-{item.details}-{item.id}
    </div>
  );
};

export default Task;
