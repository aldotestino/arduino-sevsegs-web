module.exports = {
  apps : [
    {
      name: "arduino-sevsegs-server",
      script: "./server/dist/index.js",
      watch: true
    },
    {
      name: "arduino-sevsegs-client",
      cwd: "./client/build",
      script: "npx",
      interpreter: "none",
      args: "serve -p 3000",
      watch: true
    }
  ]
};