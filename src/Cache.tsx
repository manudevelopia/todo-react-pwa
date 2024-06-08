
const url = process.env.REACT_APP_UPSTASH_REDIS_REST_URL;
const token = process.env.REACT_APP_UPSTASH_REDIS_REST_TOKEN;

async function list(){
    const load = `${url}/lrange/todo/0/100?_token=${token}`;
    const response = await fetch(load);
    const todos = await response.json();
    return todos;
}

async function add(todo: string){
    const remove = `${url}/lrem/todo/1/${todo}?_token=${token}`;
    const response = await fetch(remove);
}

async function remove(todo: string){
    const remove = `${url}/lrem/todo/1/${todo}?_token=${token}`;
    const response = await fetch(remove);
}

export {list, add, remove};