module.exports = {
  apps : [{
    name: "unpkg",
    script: "start.js",
    cwd: '/unpkg/',
    env_production: {
      NODE_ENV: "production"
    }
  },{
    name: "verdaccio",
    script: "verdaccio",
    args: "--listen 0.0.0.0:4873"
  }]
};
