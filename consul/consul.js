const Consul = require('consul');

class ConsulConfig {
    constructor () {
        const serviceName = 'consul-demo';
        // 初始化 consul
        this.consul = new Consul({
            host: '172.17.0.1',
            port: 8550,
            promisify: true,
        });

        // 服务注册与健康检查配置
        this.consul.agent.service.register({
            name: serviceName,
            address: '172.17.0.1', // 注意：127.0.0.1 为我本地的内网 ip，通过 ifconfig 查看
            port: 3000,

            check: {
                http: 'http://172.17.0.1:3000/health',
                interval: '10s',
                timeout: '5s',
            }

        }, function(err, result) {

            if (err) {
                console.error(err);
                throw err;
            }
            console.log(serviceName + ' 注册成功！');
        })

    }


    async getConfig(key) {
        const result = await this.consul.kv.get(key);
        if (!result) {
            return Promise.reject(key + '不存在');
        }
        return JSON.parse(result.Value);
    }


    // 读取 user 配置简单封装
    async getUserConfig(key) {
        const result = await this.getConfig('develop/user');
        if (!key) {
            return result;
        }
        return result[key];

    }


    // 更新 user 配置简单封装
    async setUserConfig(key, val) {

        const user = await this.getConfig('develop/user');
        user[key] = val;
        return this.consul.kv.set('develop/user', JSON.stringify(user))

    }

}

module.exports = ConsulConfig;