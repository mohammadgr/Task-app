import TaskForm from "../component/TaskForm/TaskForm";
import Card from "../component/UIElements/Card/Card";

function Home() {
  return (
    <div className="mx-auto m-8 w-1/2">
      <TaskForm />
      <Card>
        <div className="">
          <span>Task 1</span>
        </div>
      </Card>
    </div>
  );
}

export default Home;
