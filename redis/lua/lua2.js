const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
const fs = require('fs');

async function test() {
    const redisLuaScript = fs.readFileSync('./test.lua');
    const result1 = await redis.eval(redisLuaScript, 2, 'name1', 'name2', 20, 10);
    const result2 = await redis.eval(redisLuaScript, 2, 'name1', 'name2', 10, 20);
    console.log(result1, result2); // 1 0
}

test();