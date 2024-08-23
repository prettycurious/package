module.exports = {
  apps : [{
    name: "unpkg",
    script: "start.js",
    cwd: '/unpkg/',
    env: {
      NODE_ENV: "development",
      NPM_REGISTRY_URL: "https://registry.npmmirror.com"
    },
    env_production: {
      NODE_ENV: "production",
      NPM_REGISTRY_URL: "https://registry.npmmirror.com"
    }
  },{
    name: "verdaccio",
    script: "verdaccio",
    args: "--listen 0.0.0.0:4873",
    env: {
      NODE_ENV: "development",
      NPM_REGISTRY_URL: "https://registry.npmmirror.com"
    },
    env_production: {
      NODE_ENV: "production",
      NPM_REGISTRY_URL: "https://registry.npmmirror.com"
    }
  }]
};
