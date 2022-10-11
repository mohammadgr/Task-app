import { useState } from "react";
import InputField from "../UIElements/InputField/InputField";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleChange = (value) => {
    setTitle(value);
  };

  return (
    <div className="h-auto bg-[#DCDCDC] dark:bg-[#484848] shadow-md dark:shadow-lg p-6 border border-[#E8E8E8] dark:border-[#585858] rounded">
      <InputField
        label="Task Title"
        isValid="false"
        name="taskTitle"
        type="text"
        value={title}
        errorMessage="*Task Title field cannot empty!"
        handleChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <InputField type="date" label="Date" />
    </div>
  );
};

export default TaskForm;
