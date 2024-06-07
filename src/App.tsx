import React, {useEffect, useState} from 'react';
import List from "./tasks/List";
import Editor from "./tasks/Editor";
import {Redis} from "@upstash/redis";

const redis = new Redis({
  url: process.env.REACT_APP_UPSTASH_REDIS_REST_URL,
  token: process.env.REACT_APP_UPSTASH_REDIS_REST_TOKEN,
});


const App = () => {
  const [tasks, setTasks] = useState(fetchTasks)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let cachedData: any = await redis.get('my-data-key');
        if (!cachedData) {
          cachedData = fetchTasks();
          await redis.set('my-data-key', JSON.stringify(cachedData), { ex: 3600 });
        } else {
          cachedData = JSON.parse(cachedData);
        }
        setTasks(cachedData)
      } catch (err: any) {
        console.log(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  function fetchTasks() {

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
