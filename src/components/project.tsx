const Project = ({ item }: { item: any }) => {
  return (
    <div className="w-full p-2 shadow-lg bg-white rounded-lg">
      <ul className="w-full">
        <li className="flex">
          <span className="capitalize me-1">title:</span>
          <p>{item.title}</p>
        </li>
        <li className="">
          <span className="capitalize">about:</span>
          <p>
            {item.about}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Project;
