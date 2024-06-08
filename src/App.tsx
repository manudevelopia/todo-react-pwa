import React, {useEffect, useState} from 'react';
import List from "./tasks/List";
import Editor from "./tasks/Editor";
import { list } from './Cache';

const App = () => {
  const [tasks, setTasks] = useState(fetchTasks);

  function fetchTasks() {
    list().then((todos) => {
      setTasks(todos);
    });
    console.log(tasks);
    return [
      {title: 'my task 1', description: 'This is my task 1', status: false},
      {title: 'my task 2', description: 'This is my task 2', status: true},
      {title: 'my task 3', description: 'This is my task 3', status: false},
      {title: 'my task 4', description: 'This is my task 4', status: true},
      {title: 'my task 5', description: 'This is my task 5', status: false},
    ];
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <Editor tasks={tasks} setTasks={setTasks}/>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
