import { Redis } from '@upstash/redis';

const cache = new Redis({
  url: process.env.REACT_APP_UPSTASH_REDIS_REST_URL,
  token: process.env.REACT_APP_UPSTASH_REDIS_REST_TOKEN,
});

export default cache;
