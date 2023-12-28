module.exports = {
    env: 'development',
    port: 3000,
    jwtSecret: 'bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4',
    jwtExpirationInterval: '15',
    mongo: {
      uri: '',
    },
    logs: 'dev',
    emailConfig: {
      host: '',
      port: 20001,
      username: 'angga',
      password: 'maul',
    },
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "daytask",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
  