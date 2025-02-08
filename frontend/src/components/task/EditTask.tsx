import { useState } from "react";
import { ITask } from "./Task";
import TaskForm from "./TaskForm";

interface Props {
  task: ITask;
  onSubmit?: Function;
  onClose?: Function;
  isActive?: boolean;
}

const EditTask = ({ task, onSubmit, onClose, isActive }: Props) => {
  const [ isEditActive, setIsEditActive ] = useState(isActive || false);

  const submitEditedTask = (title: string) => {
    console.log('submitEditTask', { id: task.id, title });

    // const { data, isLoading, error } = useFetch('/', {
    //   method: FetchMethod.POST,
    //   body: JSON.stringify({
    //     title,
    //   })
    // });

    setIsEditActive(false);
    if (onSubmit) onSubmit()
  }

  const onEditClose = () => {
    setIsEditActive(false);
    if (onClose) onClose();
  }

  return (
    isActive ?
    <TaskForm value={task.title} onSubmit={submitEditedTask} onClose={onEditClose}/>
    :
    task.title
  )
}

export default EditTask;