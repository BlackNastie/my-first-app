const PROXY_CONFIG = {
    "/lenta": {
        "target": "http://lenta.ch/api/",
        "secure": false,
        "changeOrigin": true,
        "autoRewrite": true,
        "logLevel": "debug",
        "pathRewrite": {
            "^/lenta": ""
        }
    }
};

module.exports = PROXY_CONFIG;