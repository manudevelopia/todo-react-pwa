import React from 'react';
import './List.css';
import Task from "./Task";

const List = ({tasks}: any) => {

  return (
    <div className="List">
      <ul>
        {tasks.map((task: any, index: number) =>
          <li key={index}>
            <Task task={task}/>
          </li>)}
      </ul>
    </div>
  );
}

export default List;
