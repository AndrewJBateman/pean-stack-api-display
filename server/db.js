// const Pool = require("pg").Pool;

// const devConfig =
//   `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}` +
//   `@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const proConfig = process.env.DATABASE_URL;
// const pool = new Pool({
// 	connectionString:	process.env.NODE_ENV === "production" ? proConfig : devConfig,
//   ssl: false
// });

// module.exports = pool;

const dbConfig = {
  client: "mysql",
  connection: {
    user: "masterng",
    password: "password1234",
    database: "ng-data",
    host: "127.0.0.1",
    socketPath: "/cloudsql/angular-material-ssr:europe-west6:ng-stack-data",
  },
};

module.exports = { dbConfig };
