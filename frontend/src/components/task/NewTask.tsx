import { useState } from "react";
import TaskForm from "./TaskForm";
import { Button } from "../ui/button";

interface Props {
  onSubmit?: Function;
}

const NewTask = ({ onSubmit }: Props) => {
  const [ isActive, setIsActive ] = useState(false);

  const submitAddedTask = (title: string) => {
    console.log('submitNewTask', { title });

    // const { data, isLoading, error } = useFetch('/', {
    //   method: FetchMethod.POST,
    //   body: JSON.stringify({
    //     title,
    //     isCompleted: false
    //   })
    // });

    setIsActive(false);
    if (onSubmit) onSubmit(title)
  }

  const onClose = () => {
    setIsActive(false);
  }

  return (
    isActive ?
    <TaskForm onSubmit={submitAddedTask} onClose={onClose}/>
    :
    <Button variant="add" onClick={() => setIsActive(true)}>
      Add
    </Button>
  )
}

export default NewTask;