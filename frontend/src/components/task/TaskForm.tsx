import CloseIcon from "../icons/Close";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

interface Props {
  value?: any;
  onSubmit?: Function;
  onClose?: Function;
}

const TaskForm = ({ value, onSubmit, onClose }: Props) => {
  const [ inputVal, setInputVal ] = useState(value || '');

  const handleInput = (e: any) => {
    setInputVal(e.target.value);
  }

  const handleClose = (e: any) => {
    e.preventDefault();
    if (onClose) onClose();
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) onSubmit(inputVal);
  }

  return (
    <div className="flex">
      <div className="relative inline mr-2">
        <Input type="" value={inputVal} onChange={handleInput} className="indent-[20px]"/>
        <Button className="p-3 absolute top-[50%] left-[4px] translate-y-[-50%]" variant="secondary" size="circle" onClick={handleClose}>
          <CloseIcon />
        </Button>
      </div>
      <Button onClick={handleSubmit}>
        Save
      </Button>
    </div>
  )
}

export default TaskForm;