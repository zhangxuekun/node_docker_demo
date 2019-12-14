-- test.lua

-- 先 SET
redis.call("SET", KEYS[1], ARGV[1])
redis.call("SET", KEYS[2], ARGV[2])

-- GET 取值
local key1 = tonumber(redis.call("GET", KEYS[1]))
local key2 = tonumber(redis.call("GET", KEYS[2]))

-- 如果 key1 小于 key2 返回 0
-- nil 相当于 false
if (key1 == nil or key2 == nil or key1 < key2)
then 
    return 0
else 
    return 1
end