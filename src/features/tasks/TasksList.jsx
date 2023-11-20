import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./tasksSlice";

const TasksList = () => {
  const [taskText, setTaskText] = useState('');

  const tasks = useSelector((state) => state.tasks.tasks);
  //* Esta función se utiliza para despachar acciones al store de redux
  const dispatch = useDispatch();

  //* agregar un tarea
  const handleAddTask = () => {
    if(!taskText) return;
    dispatch(addTask({id: Date.now(), text: taskText}));
    setTaskText('');
  }

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  }
  return (
    <div>
      <input
        className="mx-2"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TasksList