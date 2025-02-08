import { useState } from "react";
import EditTask from "./EditTask";
import { Button } from "../ui/button";

interface Props {
  task: ITask;
}

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Task = ({ task }: Props ) => {
  const [ isEditActive, setIsEditActive ] = useState(false);

  const handleSubmit = async () => {

    // const { data, isLoading, error } = useFetch('/', {
    //   method: FetchMethod.POST,
    //   body: JSON.stringify({
    //     title,
    //   })
    // });

    setIsEditActive(false);
  };

  const completeTask = async () => {
    task.isCompleted = true
    console.log('completeTask', { id: task.id, isCompleted: true });
    // const { data, isLoading, error } = useFetch('/', {
    //   method: FetchMethod.POST,
    //   body: JSON.stringify({
    //     title,
    //   })
    // });
  };

  const deleteTask = async () => {
    // const { data, isLoading, error } = useFetch('/', {
    //   method: FetchMethod.POST,
    //   body: JSON.stringify({
    //     title,
    //   })
    // });
  };

  return (
    <div className="flex w-full py-3 justify-between">
      <div>
        <EditTask task={task} onSubmit={handleSubmit} onClose={() => setIsEditActive(false)} isActive={isEditActive}/>
      </div>
      <div>
        {
          !isEditActive && (
            <Button variant="outline" className="ml-3" onClick={() => setIsEditActive(true)}>
              Edit
            </Button>
          )
        }
        {
          !task.isCompleted && (
            <Button className="ml-3" onClick={completeTask}>
              Complete
            </Button>
          )
        }
        <Button variant="destructive" className="ml-3" onClick={deleteTask}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Task;