const interfaces = require('os').networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址

let IPAdress = '';
for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            IPAdress = alias.address;
        }
    }
}

let proxy= {
    host: !!IPAdress ? IPAdress : 'localhost', // can be overwritten by process.env.HOST
    port: 8080,
    proxy: {
        '/services': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/services': '/services'
            }
        },
        '/base-customer-platform': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/base-customer-platform': '/base-customer-platform'
            }
        },
        '/base-resource-platform': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/base-resource-platform': '/base-resource-platform'
            }
        },
        '/image-api': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/image-api': '/image-api'
            }
        },
        '/comm': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/comm': '/comm'
            }
        },
        '/base-social-platform': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/base-social-platform': '/base-social-platform'
            }
        },
        '/call': {
            target: 'https://www.allinmd.cn',
            changeOrigin: true,
            pathRewrite: {
                '^/call': '/call'
            }
        },
        '/base-image-platform': {
            target: 'http://192.168.1.172:3333',
            changeOrigin: true,
            pathRewrite: {
                '^/base-image-platform': '/base-image-platform'
            }
        }
    }
};
module.exports= proxy;
