import React, {useEffect, useState} from 'react';
import './List.css';

const Editor = ({tasks, setTasks}: any) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [disableAddTask, setDisableAddTask] = useState(true)

  useEffect(() => {
    console.log('use effect ran!');
  }, [tasks])

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
    if (e.target.value.length) {
      setDisableAddTask(false)
    } else {
      setDisableAddTask(true)
    }
  }

  const addTask = () => {
    setTasks([...tasks, {title: taskTitle, description: taskDescription}])
    cleanForm();
  }

  function cleanForm() {
    setTaskDescription('');
    setTaskTitle('');
    setDisableAddTask(true)
  }

  return (
    <div className="Editor">
      <form>
        <input value={taskTitle} onChange={e => setTitle(e)}/>
        <input value={taskDescription} onChange={e => setTaskDescription(e.target.value)}/>
        <button onClick={addTask} disabled={disableAddTask}>Add tasks</button>
      </form>
    </div>
  );
}

export default Editor;
