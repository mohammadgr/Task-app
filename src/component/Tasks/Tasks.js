import Card from "../UIElements/Card/Card";

const Tasks = () => {
  return (
    <div className="border-t mt-3 border-gray-300 boxshadow-md">
      <h2 className="mx-4 my-2 border-b border-gray-200 p-2 font-semibold dark:text-gray-200">
        Tasks
      </h2>
      <Card>
        <div className="dark:text-gray-200 font-semibold">
          <span>Task 1</span>
        </div>
      </Card>
      <Card>
        <div className="dark:text-gray-200 font-semibold">
          <span>Task 2</span>
        </div>
      </Card>
    </div>
  );
};

export default Tasks;
