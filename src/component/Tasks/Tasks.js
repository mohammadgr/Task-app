import Card from "../UIElements/Card/Card";

const Tasks = ({ task }) => {
  // const [tasks, setTasks] = useState('?');

  // setTasks(task);
  return (
    <div className="border-t mt-3 border-gray-300 boxshadow-md">
      <h2 className="mx-4 my-2 border-b border-gray-200 p-2 font-semibold dark:text-gray-200">
        Tasks
      </h2>
      {task.map((item) => (
        <Card key={item}>
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

export default Tasks;
