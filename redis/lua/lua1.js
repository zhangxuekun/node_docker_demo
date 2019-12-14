const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");

const evalScript = `return redis.call('SET', KEYS[1], ARGV[2])`;

async function evalSHA() {
    // 1. 缓存脚本获取 sha1 值
    const sha1 = await redis.script("load", evalScript);
    console.log(sha1); // 6bce4ade07396ba3eb2d98e461167563a868c661

    // 2. 通过 evalsha 执行脚本
    await redis.evalsha(sha1, 2, 'name1', 'name2', 'val1', 'val2');

    // 3. 获取数据
    const result = await redis.get("name1");
    console.log(result); // "val2"
}

evalSHA();