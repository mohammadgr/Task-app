import Card from "../UIElements/Card/Card";

const MoreTasks = ({ tasks }) => {
  return (
    <div className="mt-2 boxshadow-md">
      <h2 className="m-4 border-b border-gray-200 p-2 font-semibold dark:text-gray-200">
        More Tasks
      </h2>
      {tasks.map((item) => (
        <Card key={item._id}>
          <div className="dark:text-gray-200 font-semibold">
            <span className="block my-2 text-black/70 dark:text-gray-200">
              {item.title}
            </span>
            <span className="block my-2 mx-4 text-black/70 dark:text-gray-200">
              {item.date}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MoreTasks;
