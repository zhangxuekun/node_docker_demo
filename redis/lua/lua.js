const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");

const evalScript = `return redis.call('SET', KEYS[1], ARGV[2])`;

redis.defineCommand("evalTest", {
    numberOfKeys: 2,
    lua: evalScript,
})

async function eval() {
    await redis.evalTest('name1', 'name2', 'val1', 'val2');
    const result = await redis.get('name1');
    console.log(result); // val2
}

eval();