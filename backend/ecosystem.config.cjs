module.exports = {
  apps: [
    {
      name: "mpc-backend",
      script: "./dist/server.js",
      cwd: "/var/www/mpc-electrical-solutions/backend",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "development",
        PORT: 3014,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3014,
      },
    },
  ],
};
