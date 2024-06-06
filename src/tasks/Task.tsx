import React from "react";

const Task = ({task}: any) => {

  return (<div className="Task">
    <input type="checkbox" checked={task.status}/>
    {task.title} {task.description}
  </div>);
}

export default Task;
