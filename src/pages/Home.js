import { useContext, useState } from "react";
import { AuthContext } from "../component/context/auth-context";
import TaskForm from "../component/TaskForm/TaskForm";
import Tasks from "../component/Tasks/Tasks";
import MoreTasks from "../component/MoreTasks/MoreTasks";
import Auth from "../component/Auth/Auth";

function Home() {
  const authContext = useContext(AuthContext);

  let moreTasks = <Auth />;

  if (authContext.isAuth) {
    moreTasks = <MoreTasks />;
  }

  const [tasks, setTasks] = useState([]);
  const submitTaskHandler = (item) => {
    setTasks([
      ...tasks,
      {
        title: item.title,
        date: item.date
      }
    ]);
  };

  return (
    <div className="mx-auto m-8 w-1/2">
      <TaskForm submitTask={submitTaskHandler} />
      <Tasks task={tasks} />
      <div className="mt-4 w-full">{moreTasks}</div>
    </div>
  );
}

export default Home;
