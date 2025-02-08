import Task, { ITask } from "./Task";

interface Props {
  tasks: ITask[];
}

const TaskList = ({ tasks }: Props ) => {
  return (
    <ul>
      {
        tasks.map( task => {
          return (
            <li key={task.id}>
              <Task task={task} />
            </li>
          )
          
        })
      }
    </ul>
  )
}

export default TaskList;