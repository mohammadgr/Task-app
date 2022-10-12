import Card from "../UIElements/Card/Card";

const MoreTasks = () => {
  return (
    <div className="mt-2 boxshadow-md">
      <h2 className="m-4 border-b border-gray-200 p-2 font-semibold dark:text-gray-200">
        More Tasks
      </h2>
      <Card>
        <div className="dark:text-gray-200 font-semibold">
          <span>More Task 1</span>
        </div>
      </Card>
      <Card>
        <div className="dark:text-gray-200 font-semibold">
          <span>More Task 2</span>
        </div>
      </Card>
    </div>
  );
};

export default MoreTasks;
